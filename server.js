const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const runtime = 'edge';
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle error reports
app.post('/', (req, res) => {
	const { error } = req.body;

	console.log('Received error report:');
	console.log(error);
	// Respond with a success message
	res.status(200).send('Error report received');
});

// Start the server
app.listen(port, () => {
	console.log(`Error reporting app listening at `);
});
