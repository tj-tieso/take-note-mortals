const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true })); // parse incoming string || array
app.use(express.json()); // parse incoming JSON data
app.use(express.static("public")); // serve static files

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// open localhost
app.listen(PORT, () => {
  console.log(`We out here on port ${PORT}!`);
});
