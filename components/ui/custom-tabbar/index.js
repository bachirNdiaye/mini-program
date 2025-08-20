
Component({
  data: {
    selected: 0,
    menu: [
      {
        icon: '/assets/images/menu/home.png',
        text: 'Home',
        url: '/pages/index/index'
      },
      {
        icon: '/assets/images/menu/explorer.png',
        text: 'Explorer',
        url: '/pages/explorer/index'
      },
      
      {
        icon: '/assets/images/menu/bookmark.png',
        text: 'Bookmarks',
        url: '/pages/bookmarks/index'
      },
      
      {
        icon: '/assets/images/menu/profile.png',
        text: 'Profile',
        url: '/pages/profile/index'
      }
    ]
  },

  methods: {
    switchTab(e) {
      const index = e.currentTarget.dataset.index;
      const item = this.data.menu[index];
      
      // Mettre à jour l'état sélectionné
      this.setData({
        selected: index
      });

      // Naviguer vers la page
      wx.switchTab({
        url: item.url,
        success: () => {
          console.log('Navigation réussie vers:', item.text);
        },
        fail: (error) => {
          console.error('Erreur de navigation:', error);
          // Fallback: utiliser wx.navigateTo si switchTab échoue
          wx.navigateTo({
            url: item.url,
            fail: (err) => {
              console.error('Navigation de fallback échouée:', err);
            }
          });
        }
      });
    },

    // Méthode pour définir l'onglet actif depuis l'extérieur
    setActiveTab(index) {
      this.setData({
        selected: index
      });
    }
  },

  // Cycle de vie du composant
  lifetimes: {
    attached() {
      // Déterminer l'onglet actif basé sur la page courante
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const currentPath = '/' + currentPage.route;
      
      const activeIndex = this.data.menu.findIndex(item => 
        item.url === currentPath
      );
      
      if (activeIndex !== -1) {
        this.setData({
          selected: activeIndex
        });
      }
    }
  }
})
