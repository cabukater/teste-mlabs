//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/mLabs'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/mLabs/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);

http.listen((process.env.PORT || 5000), function(){
    console.log('listening on *:5000');
  });