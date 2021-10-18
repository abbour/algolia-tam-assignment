import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hierarchicalMenu, hits, searchBox, configure, index } from 'instantsearch.js/es/widgets';

// Autocomplete Template
import autocompleteProductTemplate from '../templates/autocomplete-product';
import autocompleteData from '../templates/autocomplete-data';

// TODO: move to conf file
const APP_NAME = '1LFNP5HQEZ';
const API_KEY = '236da3e09076873e7aa7917049c9aa46';

/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      APP_NAME,
      API_KEY
    );

    this._searchInstance = instantsearch({
      indexName: 'demo_SpencerAndWilliams',
      searchClient: this._searchClient,
    });
  }


  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      configure({
        hitsPerPage: 5,
      }),
      searchBox({
        container: '#searchbox',
      }),
	    
      hits({
        container: '#autocomplete-hits',
        templates: { item: autocompleteProductTemplate },
      }),
      // Autocomplete
      index({ indexName: 'demo_SpencerAndWilliams_query_suggestions' }).addWidgets([
        configure({ hitsPerPage: 4 }),
        hits({
          container: '#suggestions',
          templates: {
			  item:autocompleteData
          },
        }),
      ]),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default Autocomplete;
