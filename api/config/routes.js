const express = require('express');
const router = express.Router();
const jotformController= require('../controller/jotformController');
const sendemailController= require('../controller/sendemailController');


router.get('/', function(request, response) {
    response.send("hello from backend API");
});


router.post("/testjotform", jotformController.test);

router.post("/send-email", sendemailController.sendEmail);



module.exports = router;