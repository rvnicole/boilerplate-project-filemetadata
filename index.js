var express = require('express');
var cors = require('cors');
require('dotenv').config();
const fileUpload = require("express-fileupload");

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});

app.use(fileUpload());

app.post("/api/fileanalyse", (req, res) => {
  console.log('Hola', req.files.upfile);
  const { name, size, mimetype } = req.files.upfile;
  const datos = { name, type: mimetype, size };
  res.json(datos);
});