const express = require("express");
const path = require("path");
const { Pool, Client } = require("pg");

const PORT = process.env.PORT || 5001;
require("dotenv/config");

// Init Express
const app = express();


// Init Postgres
const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: true })
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; // I think this bypasses the SSL verification

// Connect to Postgres 
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

// Test client querry
client.query('SELECT * FROM watchlist', (err, res) => {
  if (err) throw err
  console.log(err, res)
  client.end()
})

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allow cross orign request
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Set Static folder
app.use(express.static(path.join(__dirname, "public")));

// Router to Watchlist API
app.use("/watchlist", require("./api/watchlist"));

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
