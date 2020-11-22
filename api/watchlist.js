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
    const watchlist = await client.query('SELECT * FROM watchlist');
    res.status(201).json(watchlist.rows);
  } catch (err) {
    res.status(400).json({
      error: `${err})`,
    });
  }
});

// GET single data from watchlist (based on id)
router.get("/:id", async (req, res) => {
  try {
    const watchlist = await client.query('SELECT * FROM watchlist WHERE id=' + req.params.id);
    if (watchlist.rows.length > 0) {
      res.status(201).json(watchlist.rows);
    } else {
      res.status(400).json({
        error: `No data found with id#${req.params.id}`,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// DELETE single data from watchlist (based on id)
router.delete("/:id", async (req, res) => {
  try {
    const watchlist = await client.query('DELETE FROM watchlist WHERE id=' + req.params.id);
    res.status(200).json({
      success: `User #${req.params.id} has been deleted.`,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

/* UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition; */

// PATCH single data from watchlist (based on id)
router.patch("/:id", async (req, res) => {

  let updateField = '';
  if (req.body.desc) {
    updateField = updateField + "desc='" + req.body.desc + "',";
  }
  if (req.body.done) {
    updateField = updateField + "done='" + req.body.done + "',";
  }
  if (req.body.link) {
    updateField = updateField + "link='" + req.body.link + "',";
  }
  if (req.body.active !== undefined) {
    updateField = updateField + "active=" + req.body.active + ",";
  }
  if (req.body.tags) {
    updateField = updateField + "tags='" + req.body.tags + "',";
  }
  if (req.body.title) {
    updateField = updateField + "title='" + req.body.title + "',";
  }

  const updateFieldEdited = updateField.slice(0, -1) // delete the last comma
  const updateQuery = 'UPDATE watchlist SET ' + updateFieldEdited + ' WHERE id=' + req.params.id;

  try {
    const watchlist = await client.query(updateQuery);
    if (watchlist.rowCount > 0) {
      res.status(200).json({
        success: `User #${req.params.id} has been updated.`,
      });
    } else {
      res.status(400).json({
        error: `No data found with id#${req.params.id}`,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }

});

module.exports = router;

/*
// POST add users
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.pwd,
    active: true,
  });

  if (!user.name || !user.email || !user.password) {
    return res.status(400).json({ error: `Error: Some field are missing.` });
  }

  try {
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

*/

