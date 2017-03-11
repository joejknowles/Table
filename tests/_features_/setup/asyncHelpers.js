export const sleep = (ms = 0) => {
  return new Promise(r => setTimeout(r, ms));
}

export const recheck = async(boolTest) => {
  let result = await boolTest();
  for (let attempts = 0; attempts < 5; attempts++) {
    if (result) {
      return result
    } else {
      await sleep(2000);
      result = await boolTest();
    }
  }
  return result;
};
