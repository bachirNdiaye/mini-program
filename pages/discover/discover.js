Page({
   data: {
    categories: ["All", "Politic", "Sport", "Education", "Gaming"],
    activeCategory: "All",
    scrollTop: 0,
    articles: [
      {
        image: '/assets/1.jpg',
        category: 'Tech',
        title: 'L’intelligence artificielle bouleverse les industries',
        avatar:  '/assets/images/avatar.png',
        author: 'Jean Dupont',
        date: 'Aujourd’hui'
      },
      {
        image: '/assets/2.jpg',
        category: 'Finance',
        title: 'Crypto : le rebond inattendu des marchés',
        avatar: '/assets/images/avatar.png',
        author: 'Fatou Ndiaye',
        date: 'Hier'
      },
      {
        image: '/assets/2.jpg',
        category: 'Santé',
        title: 'Les bienfaits du sommeil sur la productivité',
        avatar: '/assets/images/avatar.png',
        author: 'Dr. Sow',
        date: 'Il y a 3 jours'
      },
      {
        image: '/assets/2.jpg',
        category: 'Santé',
        title: 'Les bienfaits du sommeil sur la productivité',
        avatar: '/assets/images/avatar.png',
        author: 'Dr. Sow',
        date: 'Il y a 3 jours'
      }
    ],
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