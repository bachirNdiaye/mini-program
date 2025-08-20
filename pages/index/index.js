Page({
  data: {
  },

  /**
   * Page initialization hook
   * @returns {void}
   */
  onLoad() {
  },


  onSearch(e) {
    console.log("Texte recherché :", e.detail);
  },
  onFilterClick() {
    console.log("Bouton filtre cliqué !");
  }

});