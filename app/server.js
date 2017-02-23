const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

const logServerListening = () => {
  console.log(`Express listening at: http://localhost:${app.get('port')}/`);
};

const server = app.listen(app.get('port'), logServerListening);

server.on('error', (e) => {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
      server.close();
    setTimeout(() => {
      server.listen(PORT, HOST);
      logServerListening();
    }, 100);
  }
});

module.exports = {
  server: server
};
