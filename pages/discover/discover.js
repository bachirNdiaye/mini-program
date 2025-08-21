Page({
   data: {
     categories: ["All", "Politic", "Sport", "Education", "Gaming"],
    activeCategory: "All",
    statusBarHeight:0
  },


  /**
   * Page initialization hook
   * @returns {void}
   */
  onLoad() {
  const systemInfo = wx.getSystemInfoSync();
  this.setData({
    statusBarHeight: systemInfo.statusBarHeight + 4 // tu peux ajouter une petite marge en plus
  });
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
  },
onBackClick() {
  wx.navigateBack({
    delta: 1  
  })
}

});