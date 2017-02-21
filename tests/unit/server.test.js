import server from '../../app/server';

it('server is listening', () => expect(server.listening).toBe(true));

afterAll(() => server.close());
