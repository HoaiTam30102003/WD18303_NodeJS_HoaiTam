const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const sequelize = require('sequelize');
const mysql = require('mysql');
const app = express();
const port = 3300;
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static("public"));



/****************************************************************/
const adminRoutes = require('./routers/admin');
app.use('/admin', adminRoutes);

const clientRoutes = require('./routers/client');
app.use('/client', clientRoutes);

const apiRouters = require('./routers/api');
app.use('/api', apiRouters);


/****************************************************************/

const upload = multer({ dest: './public/images' });
/****************************************************************/




app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`);
})