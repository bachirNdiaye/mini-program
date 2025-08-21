Page({
  data: {
    scrollTop: 0
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