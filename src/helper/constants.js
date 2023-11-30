const stages = {
  betting: {
    id: 1,
    title: "You can continue betting for next",
    duration: 10,
    next: "findingWinner",
  },
  findingWinner: {
    id: 2,
    title: "Finding the winner for you in",
    duration: 2,
    next: "resultTime",
  },
  resultTime: {
    id: 3,
    title: "Result will be shown here for",
    duration: 5,
    next: "betting",
  },
};

const noOfPositions = 6;
const balance = 100;

export { stages, noOfPositions, balance };
