const express = require("express");
const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  res.status(201).json({ msg: 'hello' });
});

module.exports = router;


/* GET single user (based on id)
router.get("/:userID", async (req, res) => {
  try {
    const user = await User.findById(req.params.userID);
    res.json(user);
  } catch (err) {
    res.status(400).json({
      error: `No user found with id#${req.params.userID} (error ${err})`,
    });
  }
});

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

