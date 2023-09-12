// Tailwind recompilation
const { exec } = require('child_process');

exec('npx tailwindcss -i ./input.css -o ./public/style.css', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

// Express server
const express = require('express');
const app = express();
const port = 80;

//serve static files from public directory
app.use(express.static('public'));


//server index.html page when root path is requested
app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname +'/views/about.html');
});



//start server on the specified port and binding host
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});