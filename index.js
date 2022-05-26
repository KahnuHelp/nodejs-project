const express = require('express');
const cors = require('cors');
require('dotenv').config()

require('./api/config/database')
const app = express();
const port = 3005;

//for cors - origin error
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));


app.get('/', function (request, response) {
    response.send("hello from backend");
});

const router = require('./api/config/routes');
app.use(express.json());

app.use('/api', router);


app.listen(port, () => {
    console.log(`Our node js server started at ${port}`);
    console.log('---------------------------------------------------');
    console.log('---------------------------------------------------');

});
