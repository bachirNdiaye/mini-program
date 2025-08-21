Page({
  data: {
    isHeaderExpanded: false,
     statusBarHeight:0
  },

  /**
   * Page initialization hook
   * @returns {void}
   */
  onLoad() {
    this.initHeaderScroll();
     const systemInfo = wx.getSystemInfoSync();
  this.setData({
    statusBarHeight: systemInfo.statusBarHeight + 4 // tu peux ajouter une petite marge en plus
  });
  },

  onBackClick() {
    wx.navigateBack();
  },

  /**
   * Initialize header scroll functionality
   */
  initHeaderScroll() {
    // L'événement de scroll sera géré par le composant bottom-sheet
    console.log('Header scroll initialisé');
  },

  /**
   * Handle scroll events
   */
  onScroll(e) {
    const scrollTop = e.detail.scrollTop;
    const threshold = 50; // Seuil pour déclencher l'expansion

    if (scrollTop > threshold && !this.data.isHeaderExpanded) {
      this.setData({
        isHeaderExpanded: true
      });
      this.expandHeader();
      this.fixPositions();
    } else if (scrollTop <= threshold && this.data.isHeaderExpanded) {
      this.setData({
        isHeaderExpanded: false
      });
      this.collapseHeader();
      this.resetPositions();
    }
  },

  /**
   * Expand header
   */
  expandHeader() {
    this.createSelectorQuery()
      .select('.header-container')
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        if (res[0] && res[0].node) {
          res[0].node.classList.add('expanded');
        }
      });
  },

  /**
   * Collapse header
   */
  collapseHeader() {
    this.createSelectorQuery()
      .select('.header-container')
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        if (res[0] && res[0].node) {
          res[0].node.classList.remove('expanded');
        }
      });
  },

  /**
   * Fix positions when scrolling
   */
  fixPositions() {
    // Fixer le header
    this.createSelectorQuery()
      .select('.header-container')
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        if (res[0] && res[0].node) {
          res[0].node.classList.add('fixed');
        }
      });

    // Mettre le bottom-sheet en position absolue
    this.createSelectorQuery()
      .select('.scrollable-container')
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        if (res[0] && res[0].node) {
          res[0].node.classList.add('scrolled');
        }
      });
  },

  /**
   * Reset positions when not scrolling
   */
  resetPositions() {
    // Remettre le header en position relative
    this.createSelectorQuery()
      .select('.header-container')
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        if (res[0] && res[0].node) {
          res[0].node.classList.remove('fixed');
        }
      });

    // Remettre le bottom-sheet en position fixed
    this.createSelectorQuery()
      .select('.scrollable-container')
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        if (res[0] && res[0].node) {
          res[0].node.classList.remove('scrolled');
        }
      });
  }
});