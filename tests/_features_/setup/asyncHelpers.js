export const recheck = async(boolTest) => {
  let result = await boolTest();
  for (let attempts = 0; attempts < 5; attempts++) {
    if (result) {
      return result
    } else {
      result = await boolTest();
    }
  }
  return result;
};
