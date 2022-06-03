const router = require("express").Router();
const notes = require("../../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  //set id
  let newNote = req.body;
  newNote.id = uuidv4();
  console.log(newNote);
  notes.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(notes), (err, data) => {
    if (err) throw err;
  });
  res.json(notes);
});

module.exports = router;
