Component({
  data: {
    showShadow: true,
   
  },
  properties: {
      articles: {
      type: Array,
      value: []
    },
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

