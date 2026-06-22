// propertyService.js
module.exports = {
  lookup: async (name, state) => {
    return [
      {
        source: "property",
        result: "No property data yet",
        nameSearched: name,
        stateSearched: state
      }
    ];
  }
};