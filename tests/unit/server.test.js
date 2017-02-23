import { server } from '../../app/server';
import supertest from "supertest";

const app = server;
const request = supertest.agent(app.listen());

it('server is listening', (done) => {
  console.log(server.listening);
  expect(server.listening).toBe(true)
  done();
});

afterAll(async (done) => {
  await request.close();
  done()
});
