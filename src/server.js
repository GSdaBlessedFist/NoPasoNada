const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3400;

app.use(express.static('public'));

// Express config
// const publicDirectory = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

// Handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
  res.render('index',{words:"things"})
});

app.listen(port, () => {
  console.log(`Red to go on port ${port}!`)
});
