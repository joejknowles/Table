import server from '../../server';

it('server is listening', () => expect(server.listening).toBe(true));

afterAll(() => server.close());
