/**
   * Rounds the vote_average value to one decimal place.
   * @returns {number} The rounded vote_average value.
   */
const AverageRatesRounder = (vote_average: number) => Math.round(vote_average * 10) / 10;
export default AverageRatesRounder;
