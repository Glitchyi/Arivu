// Tailwind recompilation
const { exec } = require("child_process");
const fs = require("fs");

// exec(
//   "npx tailwindcss -i ./input.css -o ./public/style.css",
//   (err, stdout, stderr) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(stdout);
//   }
// );

// Express server
const express = require("express");
const app = express();
const port = 80;

//serve static files from public directory
app.use(express.static("public"));

//server index.html page when root path is requested
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.get('/about', (req, res) => {
//     res.sendFile(__dirname +'/views/about.html');
// });

app.get("/:path", (req, res) => {
  console.log(fs.existsSync(__dirname + `/views/${req.params.path}.html`));
  if (fs.existsSync(__dirname + `/views/${req.params.path}.html`)) {
    res.sendFile(__dirname + `/views/${req.params.path}.html`);
  } else {
    res.sendFile(__dirname + `/404.html`);
  }
});

//start server on the specified port and binding host
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
