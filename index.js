const express = require('express');
const app = express();
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on PORT ${port}`)
});