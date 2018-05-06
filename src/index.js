'use strict';
const express = require('express');
const app = express();

const Functions = require('./functions');


app.get('/', (req, res) => res.send('sumArray function available at /sum/n route.'))
app.get('/sum/:n', (req, res) => {
  const n = parseInt(req.params.n);

  const sumArray = Functions.sumArray(n);

  const result = {
    input: n,
    result: sumArray
  }
  res.json(result)
});


app.listen(3000, () => console.log('App listening on port 3000!'))

