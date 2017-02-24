const app = require('./index.js');

app.set('port', (process.env.PORT || 3001));

const logServerListening = () => {
  console.log(`Express listening at: http://localhost:${app.get('port')}/`);
};

const server = app.listen(app.get('port'), logServerListening);

module.exports = server;
