Component({
  data: {
    showShadow: true,
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
        image: '/assets/1.jpg',
        category: 'Tech',
        title: 'L’intelligence artificielle bouleverse les industries',
        avatar:  '/assets/images/avatar.png',
        author: 'Jean Dupont',
        date: 'Aujourd’hui'
      },
      
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
        category: 'Tech',
        title: 'L’intelligence artificielle bouleverse les industries',
        avatar:  '/assets/images/avatar.png',
        author: 'Jean Dupont',
        date: 'Aujourd’hui'
      }

    ]
  },
  properties: {
    scrollTop: {
      type: Number,
      observer(newVal) {
        this.setData({
          showShadow: newVal < 100
        });
      }
    }
  },

  methods: {
    onScrollToLower() {
      this.setData({ showShadow: false });
    },
    onScrollToTop() {
      this.setData({ showShadow: true });
    },
    onScroll(e) {
      const { scrollTop, scrollHeight, scrollHeight: height } = e.detail;

      // Optionnel : auto-hide dès qu'on dépasse 90% du scroll
      if (scrollTop > height * 0.6) {
        this.setData({ showShadow: false });
      } else {
        this.setData({ showShadow: true });
      }
    }
  }
  

})

