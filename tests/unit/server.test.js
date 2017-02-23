let server;

beforeEach(() => server = require('../../app/server').server);

it('server is listening', async () => {
  expect(server.listening).toBe(true)
});

afterAll(async () => {
  await server.close();
  await server.on('close');
});
