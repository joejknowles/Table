import phantom from 'phantom';
import { recheck } from './asyncHelpers';

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
    return await recheck(async () => {
      const element = await find(selector);
      return element.className !== undefined && element.className.length > 0;
    }, `has element: ${ selector }`);
  };

  const hasElementNot = async (selector) => {
    return await recheck(async () => {
      const element = await find(selector);
      return !(element.className !== undefined && element.className.length > 0);
    }, `testing absence of ${ selector }`);
  };

  const click = async (selector) => {
    return await recheck(async () => {
      const clickedElement = await page.invokeMethod('evaluate', (selector) => {
        const element = document.querySelector(selector);
        element.click();
        return element;
      }, selector);
      return !!clickedElement;
    }, `click ${ selector }`);
  };

  const currentPath = async () => (
    await page.evaluate(() => (window.location.pathname))
  );

  const containsText = async (text) => (
    await recheck(async () => (
      await page.invokeMethod('evaluate', (text) => (
      document.documentElement.innerHTML.indexOf(text) > (-1)
      ), text)
    ), `containsText: ${ text }`)
  );

  const getInnerText = async (selector) => (
    await page.invokeMethod('evaluate', (selector) => (
      document.querySelector(selector).innerHTML
    ), selector)
  );

  const inputText = async (selector, text) => (
    await page.invokeMethod('evaluate', (selector, text) => {
      const inputElement = document.querySelector(selector);
      inputElement.value = text;
      var event = new Event('input', { bubbles: true });
      inputElement.dispatchEvent(event);
    }, selector, text)
  );

  return {
    visit,
    pageContent,
    exit,
    click,
    find,
    hasElement,
    hasElementNot,
    currentPath,
    containsText,
    getInnerText,
    inputText
  };
};
