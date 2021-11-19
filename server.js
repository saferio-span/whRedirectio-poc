const express = require('express');
const path = require('path');

const app = express();

//init middleware
app.use(express.json({ extended: false }));

//Serve static assests in production
if (process.env.NODE_ENV === 'production') {
	//set static folder
	app.use(express.static('client/build'));
	app.get('/*', (req, res) => {
		console.log(path.resolve(__dirname, 'client', 'build', 'index.html'));
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

const iframeUrl = 'https://testlinks.taxbandits.io?uId=16e2845b-3d9e-4621-bdcd-cba8751f0ab2';

app.get('/api', (req, res) => {
  res.send(iframeUrl);
});

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`);
});
