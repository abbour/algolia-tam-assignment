import Autocomplete from './components/autocomplete.js';

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
    this._registerEvents();
  }

  _initSearch() {
    this.autocompleteDropdown = new Autocomplete();
  }

  _registerEvents() {
    const autocomplete = document.querySelector('.autocomplete');
    const searchbox = document.querySelector('#searchbox input');
	const suggestion = document.querySelector('.suggestions');

    searchbox.addEventListener('click', () => {
      autocomplete.style.display = 'block';
    });
	
	//TODO: retrieve suggestion value onlick and replace search text
	
   /* suggestions.addEventListener('click', () => {
      document.getElementById("searchbox").value = document.getElementById("suggestions").value; 
    });	*/

    searchbox.addEventListener('blur', () => {
      autocomplete.style.display = 'none';
    });
  }
}

const app = new SpencerAndWilliamsSearch();
