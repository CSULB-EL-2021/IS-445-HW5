const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  },
];

const cLastNameResults = studentList
  .map((std) => {
    return {
      ...std,
      minScore: Math.min(...std.scores),
      maxScore: Math.max(...std.scores),
      avgScore: std.scores.reduce((acc, curr) => acc + curr, 0) / std.scores.length
    }
  })
  .filter((std) => std.firstName[0] === 'C' && std.lastName[0] === 'C')
  .sort((a, b) => {
    return b.avgScore - a.avgScore;
  })

console.log(cLastNameResults);
