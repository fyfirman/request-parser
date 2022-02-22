const express = require('express');
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render("index", {
    url: url,
    req
  })
});

app.get('/test', (req, res) => res.send('Test Page Route'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`)
});