const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.get('/', ((req, res)=> res.json({ hi: 'hi' })))

const server = app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

export default server;
