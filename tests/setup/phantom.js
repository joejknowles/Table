import phantom from 'phantom';

export default async (customPort) => {
  const instance = await phantom.create();
  const page = await instance.createPage();
  const port = customPort || process.env.PORT || 8000;

  const visit = async (path) => {
    const status = await page.open(`http://localhost:${ port }${ path }`);
    return status;
  };

  const pageContent = async () => {
    const content = await page.property('content');
    return content;
  };

  const exit = async () => instance.exit();

  const find = async (selector) => {
    return await page.invokeMethod('evaluate', (selector) => (
      document.querySelector(selector)
    ), selector);
  };

  const click = async (selector) => {
    const result = await page.invokeMethod('evaluate', (selector) => {
      const element = document.querySelector(selector);
      return element.click();
    }, selector);
    return result;
  };

  return {
    visit,
    pageContent,
    exit,
    click,
    find
  };
};
