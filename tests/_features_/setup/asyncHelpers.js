export const sleep = (ms = 0) => {
  return new Promise(r => setTimeout(r, ms));
}

export const recheck = async(boolTest, testName = 'no name') => {
  let result = await boolTest();
  for (let attempts = 0; attempts < 5; attempts++) {
    if (result) {
      return result
    } else {
      console.log(`"${ testName }" attempt ${ attempts + 1 } unsuccessful - trying again.`);
      await sleep(2000);
      result = await boolTest();
    }
  }
  return result;
};
