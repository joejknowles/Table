import { notification } from '../../reducers/notifications';
import { defaultsToEmptyString } from './common'

describe('notification', () => {
  defaultsToEmptyString(notification);

  it('gets added', () => (
    expect(notification('', { type: 'ADD_NOTIFICATION', message: 'test' })).toEqual('test')
  ));

  it('gets removed', () => (
    expect(notification('test not', { type: 'REMOVE_NOTIFICATION' })).toEqual('')
  ));
});
