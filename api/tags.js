const express = require("express");
const router = express.Router();
const { Client } = require("pg");

// Init Postgres
const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: true })
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; // This bypasses the SSL verification

// Connect to Postgres 
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('Connected to postgres db!')
  }
})

// GET all data from watchlist
router.get("/", async (req, res) => {
  try {
    const watchlist = await client.query('SELECT * FROM watchlist ORDER BY done ASC, bookmark DESC, id ASC;');
    /*const tags = watchlist.rows.reduce((row, currentTags) => {
      return [...currentTags, ...row.tags];
    })*/
    let currentTags = [];
    watchlist.rows.forEach((entry) => {
      (entry.tags != null) && entry.tags.forEach((tag) => {
        const foundTags = currentTags.findIndex((currentTag) => {
          return currentTag.tag === tag;
        })
        if (foundTags !== -1) {
          currentTags[foundTags].score++;
        } else {
          currentTags = [...currentTags, { "tag": tag, "score": 1 }];
        }
      })
    });
    res.status(201).json(currentTags);
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

module.exports = router;



