const autocompleteData = hit => `
    <div class="searchSuggestion">${hit._highlightResult.query.value}</div> 
`;

export default autocompleteData;
