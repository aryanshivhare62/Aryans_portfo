const express = require('express');
const app = express();
PORT = 3000;

app.get('/', (req, res) => {
  res.send("Aryan's Portfolio");
});

app.listen(PORT, ()=>{
    console.log('server started');
} )