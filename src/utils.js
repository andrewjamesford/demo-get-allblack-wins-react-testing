const getAllBlacksWins = (matchData, year) => {
  if (!Array.isArray(matchData) || !matchData.length) {
    throw new Error("Match data not provided.");
  }
  console.log(isNaN(year));
  if (isNaN(year) || typeof year === "string") {
    throw new Error("Year must be a number.");
  }

  const result = matchData.find((match) => match.year === year);
  if (result && result.wins) {
    return result.wins;
  }

  return 0;
};

module.exports = { getAllBlacksWins };
