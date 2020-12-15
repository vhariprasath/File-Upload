var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");


let files = [];
router.post('/', (req, res) => {
	const book = req.body;
    console.log(book);
    files.push(book);

    res.send(book);

});




module.exports = router;


