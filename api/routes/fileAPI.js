const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let files = [];
router.post('/', (req, res) => {
	const file = req.body;
    console.log(book);
    files.push(book);

    res.send(book);

});

app.listen(port, () => console.log(`File-api listening on port ${port}!`));
