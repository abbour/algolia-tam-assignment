const autocompleteProductSuggestion = (hit) => {

  return (
    `
        <div class="autocomplete-product__name">${
          hit.query
        }</div>
     
    `
  )
}

export default autocompleteProductSuggestion;