const autocompleteData = hit => `<div class="autocomplete-product">
  <div class="autocomplete-product__details">
    
    <p class="autocomplete-product__price">${hit._highlightResult.query.value}</p> 
  </div>
    
</div>`;

export default autocompleteData;
