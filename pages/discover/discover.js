Page({
   data: {
     categories: ["All", "Politic", "Sport", "Education", "Gaming"],
    activeCategory: "All"
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
  },

 

  onBadgeClick(e) {
    const selected = e.detail.name;
    this.setData({ activeCategory: selected });
    console.log("Catégorie sélectionnée :", selected);
  }
});