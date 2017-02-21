import phantom from 'phantom';

export default async () => {
  const instance = await phantom.create()
  const page = await instance.createPage();

  const visit = async (path) => {
    const status = await page.open(`http://localhost:3001${ path }`);
    return status;
  };

  const pageContent = async () => {
    const content = await page.property('content');
    return content;
  };

  const exit = async () => instance.exit();

  const find = async (selector) => {
    const element = await page.evaluate(() => {
      return document.querySelector(selector);
    });
    if (!element) {
      throw `element with ${selector} selector not found`;
    }
    return element;
  };

  const click = async (selector) => {
    await find(selector);
    return await element.click();
  };

  return {
    visit,
    pageContent,
    exit,
    click,
    find
  };
};
