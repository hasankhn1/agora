const express = require('express'),
  path = require('path'),
  cors = require('cors'),
  app = express();

  app.options('*', cors())

  app.use(express.static(path.join(__dirname, 'build')));


  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(process.env.PORT || 4000, () => {
  console.log('LISTENING ON PORT', process.env.PORT || 4000)
})