jest.mock('react-router', () => ({
  browserHistory: []
}));
import { goToPath } from '../../helpers/routing';

describe('goToPath', () => {
  it('adds argument to browser history', () => {
    const route = 'test route';
    goToPath(route);
    const browserHistory = require.requireMock('react-router').browserHistory;
    expect(browserHistory[0]).toBe(route);
  })
})
