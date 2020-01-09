//Install express server
const express = require('express');
const path = require('path');
console.log(__dirname + '/src/index.html');
const app = express();

// Serve only the static files form the directory
app.use(express.static(__dirname + '/src'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
