const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(express.static('client/build'));

const server = app.listen(app.get('port'), () => {
  console.log(`Express listening at: http://localhost:${app.get('port')}/`);
});

module.exports = {
  server: server
};
