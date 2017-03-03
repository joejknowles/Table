import app from '../../../app';
import { connectSockets } from '../../../app/sockets';

let port;

export default (customPort = 5000) => {
  port = customPort;
  return () => {
    port++;

    app.set('port', port);

    const logServerListening = () => {
      //console.log(`Express listening at: http://localhost:${app.get('port')}/`);
    };

    const server = app.listen(app.get('port'), logServerListening);

    connectSockets(server);

    return {
      server,
      port
    };
  };
};
