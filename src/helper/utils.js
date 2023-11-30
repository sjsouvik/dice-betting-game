export const generateState = (n) => {
  return Array(n)
    .fill(null)
    .reduce((acc, _, index) => {
      acc[index + 1] = 0;
      return acc;
    }, {});
};

export const findInvestedAmount = (state) => {
  return Object.values(state).reduce((sum, amount) => sum + amount);
};
