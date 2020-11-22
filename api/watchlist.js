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
    console.log(res.outputSize);
    res.status(400).json({
      success: `User #${req.params.id} has been deleted.`,
    });
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

// Delete single user (based on id)
router.delete("/:userID", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userID });
    res.json({
      msg: `User #${req.params.userID} has been deleted.`,
    });
  } catch (err) {
    res.status(400).json({
      error: `No user found with id#${req.params.userID} (error ${err})`,
    });
  }
});

// patch single user (based on id)
router.patch("/:userID", async (req, res) => {
  const updateField = {};
  if (req.body.name) {
    updateField.name = req.body.name;
  }
  if (req.body.email) {
    updateField.email = req.body.email;
  }
  if (req.body.password) {
    updateField.password = req.body.password;
  }
  if (req.body.active !== undefined) {
    updateField.active = req.body.active;
  }
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userID },
      { $set: updateField }
    );
    res.status(200).json({
      message: `User id#${req.params.userID} has been updated.`,
    });
  } catch (err) {
    res.status(400).json({
      error: `No user found with id#${req.params.userID} (error ${err})`,
    });
  }
});

*/

