import { clientType, socketId } from '../../reducers';
import { defaultsToEmptyString } from './common'

describe('client type', () => {
  defaultsToEmptyString(clientType);

  it('becomes player', () => (
    expect(clientType('', { type: 'PLAYER_JOIN' })).toEqual('PLAYER')
  ));

  it('becomes table', () => (
    expect(clientType('', { type: 'TABLE_JOIN' })).toEqual('TABLE')
  ));
});

describe('socketId', () => {
  defaultsToEmptyString(socketId)

  it('can be set', () => (
    expect(socketId('', { type: 'SET_SOCKET_ID', id: 'test' })).toEqual('test')
  ));
});
