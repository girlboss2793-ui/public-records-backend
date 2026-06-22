// inmateService.js
module.exports = {
  lookup: async (name, state) => {
    return [
      {
        source: "inmate",
        result: "No inmate data yet",
        nameSearched: name,
        stateSearched: state
      }
    ];
  }
};