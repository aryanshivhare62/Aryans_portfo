const express = require('express');
const path = require('path');
const app = express();
PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.listen(PORT, ()=>{
    console.log('server started');
} )