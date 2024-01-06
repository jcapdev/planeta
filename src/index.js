const app = require('./app')

const express = require('express');
//const app = express();
const port = 3000;

require('./firebase')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  

