import { newGame, begin, addClient, playCard } from '../../app/game';
import dal from '../../app/game/dal';
jest.mock('../../app/game/dal', () => ({
  newGame: jest.fn(),
  startGame: jest.fn(),
  currentPlayer: jest.fn(() => 'currentPlayer'),
  getGame: jest.fn(() => ({ playerCount: 1 })),
  addPlayer: jest.fn()
}));

describe('newGame', () => {
  it('calls newGame in dal', () => {
    newGame();
    expect(dal.newGame).toHaveBeenCalled();
  });
});

const gameCode = 'test code';
describe('begin', () => {
  it('calls startGame in dal', () => {
    begin(gameCode);
    expect(dal.startGame).toHaveBeenCalledWith(gameCode);
  });

  it('returns object containing currentPlayer', () => {
    const result = begin(gameCode);
    expect(result).toEqual({ currentPlayer: dal.currentPlayer() });
  });
});

describe('addClient', () => {
  it('adds player if clientType is player', () => {
    const [clientType, socketId] = ['PLAYER', 'id'];
    addClient({ gameCode, clientType, socketId});
    expect(dal.addPlayer).toHaveBeenCalledWith(gameCode, socketId);
  });

  it("doesn't add player if clientType is table", () => {
    const [clientType, socketId] = ['TABLE', 'id'];
    dal.addPlayer.mockClear();
    addClient({ gameCode, clientType, socketId});
    expect(dal.addPlayer).not.toHaveBeenCalled();
  });

  it('returns object containing currentPlayer', () => {
    const [clientType, socketId] = ['PLAYER', 'id'];
    const result = addClient({ gameCode, clientType, socketId});
    expect(result).toEqual({ playerCount: dal.getGame().playerCount });
  });
});
