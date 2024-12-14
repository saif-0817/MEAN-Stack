const http = require('http');
const app = require('./backend/app'); // Use relative path

const PORT = process.env.PORT || 3000;

app.set('port', PORT);
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

