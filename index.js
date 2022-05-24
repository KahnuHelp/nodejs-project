const express = require('express');
const cors = require('cors');


require('./api/config/database')
const app = express();
const port =  3005;

//for cors - origin error
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


// const router = require('./src/routes/routes'); 

app.use(express.json());

// app.use('/api',router);


app.listen(port , ()=>{
    console.log(`Our node js server started at ${port}`);
});
