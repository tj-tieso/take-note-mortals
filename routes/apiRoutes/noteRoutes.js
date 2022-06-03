const router = require("express").Router();
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  //set id
  req.body.id = notes.length.toString();
});

module.exports = router;
