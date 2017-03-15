export const itEnds = (generator) => {
  it('ends', () => {
    expect(generator.next()).toEqual(
      { done: true, avalue: undefined }
    );
  });
}
