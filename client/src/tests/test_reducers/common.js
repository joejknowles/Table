export const defaultsTo = (reducer, value) => {
  it('defaults to empty string', () => {
    expect(reducer(undefined, {})).toEqual(value);
  });
};

export const defaultsToEmptyString = (reducer) => {
  defaultsTo(reducer, '');
};

export const defaultsToEmptyArray = (reducer) => {
  defaultsTo(reducer, []);
};
