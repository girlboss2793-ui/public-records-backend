// sexOffenderService.js
module.exports = {
  lookup: async (name, state) => {
    return [
      {
        source: "sex_offender",
        result: "No offender data yet",
        nameSearched: name,
        stateSearched: state
      }
    ];
  }
};