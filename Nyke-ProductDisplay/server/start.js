const app = require('./');
const PORT = 3002;

app.listen(PORT, () => {
	console.log(`listening on port`.blue, `${PORT}`.cyan);
});