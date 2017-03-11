import phantom from 'phantom';

export default async (customPort) => {
  const instance = await phantom.create();
  const page = await instance.createPage();
  const port = customPort || process.env.PORT || 8000;

  const visit = async (path) => {
    const status = await page.open(`http://localhost:${ port }${ path }`);
    return status;
  };

  const pageContent = async () => (
    await page.property('content')
  );

  const exit = async () => instance.exit();

  const find = async (selector) => (
    await page.invokeMethod('evaluate', (selector) => (
      document.querySelector(selector)
    ), selector)
  );

  const hasElement = async (selector) => {
    const element = await find(selector);
    return element.className !== undefined && element.className.length > 0;
  };

  const click = async (selector) => {
    return await page.invokeMethod('evaluate', (selector) => {
      const element = document.querySelector(selector);
      return element.click();
    }, selector)
  };

  const currentPath = async () => (
    await page.evaluate(() => (window.location.pathname))
  );

  const containsText = async (text) => (
    await page.invokeMethod('evaluate', (text) => (
      document.documentElement.innerHTML.indexOf(text) > 0
    ), text)
  );

  const getInnerText = async (selector) => (
    await page.invokeMethod('evaluate', (selector) => (
      document.querySelector(selector).innerHTML
    ), selector)
  );

  const inputText = async (selector, text) => (
    await page.invokeMethod('evaluate', (selector, text) => {
      const element = document.querySelector(selector);
      element.value = text;
      var event = new Event('input', { bubbles: true });
      element.dispatchEvent(event);
    }, selector, text)
  );

  return {
    visit,
    pageContent,
    exit,
    click,
    find,
    hasElement,
    currentPath,
    containsText,
    getInnerText,
    inputText
  };
};
