const getAllBlacksWins = (matchData, year) => {
  if (!Array.isArray(matchData) || !matchData.length) {
    throw new Error("Match data not provided.");
  }
  if (!year) {
    throw new Error("Invalid year provided.");
  }
  if (typeof year === "string" || isNaN(year)) {
    throw new Error("Year must be a number.");
  }

  const result = matchData.find((yearData) => yearData.year === year);
  if (result && result.wins) {
    return result.wins;
  }

  return 0;
};

module.exports = { getAllBlacksWins };
