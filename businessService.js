// businessService.js
module.exports = {
  lookup: async (name, state) => {
    return [
      {
        source: "business",
        result: "No business data yet",
        nameSearched: name,
        stateSearched: state
      }
    ];
  }
};