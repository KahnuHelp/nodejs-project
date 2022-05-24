const express = require('express');
const router = express.Router();
const jotformController= require('../controller/jotformController');


router.post("/testjotform", jotformController.test);


router.get('/', function(request, response) {
    response.send("hello from backend API");
});

module.exports = router;