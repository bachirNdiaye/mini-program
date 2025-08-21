Page({
    data: {
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
    ]
  },
    onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    });
  },

  /**
   * Page initialization hook
   * @returns {void}
   */
  onLoad() {
  },
  goToDiscover() {
    console.log('Navigating to discover');
    wx.navigateTo({
      url: 'discover/discover',
      fail: (err) => {
        console.error('Navigation vers discover echoué', err);
      }
    });
  }
});