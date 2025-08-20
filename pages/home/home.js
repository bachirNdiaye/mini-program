Page({
  data: {
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