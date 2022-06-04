const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function parseNotes() {
  let notesArr = [];

  try {
    notesArr = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    console.log(notesArr);
  } catch (error) {
    notesArr = [];
  }

  return notesArr;
}

router.get("/notes", (req, res) => {
  let results = parseNotes();
  try {
    res.json(results);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/notes", (req, res) => {
  //set id
  try {
    let newNote = req.body;
    newNote.id = uuidv4();
    let results = parseNotes();
    results.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(results), (err, data) => {
      if (err) throw err;
    });
    res.json(results);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/notes/:id", (req, res) => {
  try {
    let results = parseNotes();
    let filteredArr = results.filter((note) => note.id !== req.params.id);
    fs.writeFile("./db/db.json", JSON.stringify(filteredArr), (err, data) => {
      if (err) throw err;
    });
    res.json({ msg: "success" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
