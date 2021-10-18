const resultHit = hit => `<div class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <h2 class="result-hit__name">${hit._highlightResult.name.value}</h2>
    <p class="result-hit__price">$${hit.price}</p>
    <p>${hit.brand}</p>
  </div>
</div>`;

export default resultHit;
