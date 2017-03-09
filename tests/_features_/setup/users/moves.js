export const createSharedMoves = (browser) => {
  const clickBegin = async () => (
    await browser.click('.begin-button')
  );
  return { clickBegin };
};
