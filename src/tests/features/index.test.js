import app from '../../server';

it('app is the same', () => expect(JSON.stringify(app)).toMatchSnapshot());
 app.close();
