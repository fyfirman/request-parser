const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = 4000;

app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render("index", {
    url: url,
    req
  })
});

app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`)
});