const autocompleteData = hit => `
    <div class="autocomplete-suggestion">${hit._highlightResult.query.value}</div> 
`;

export default autocompleteData;
