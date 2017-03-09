export const createSharedMoves = (browser) => {
  const clickBegin = async () => (
    await browser.click('.begin-button')
  );

  const getGameCode = async () => (
    await browser.getInnerText('.game-code')
  );

  return {
    clickBegin,
    getGameCode
  };
};
