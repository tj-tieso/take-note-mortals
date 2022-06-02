const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require("./db/db.json");

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.listen(PORT, () => {
  console.log(`We out here on port ${PORT}!`);
});
