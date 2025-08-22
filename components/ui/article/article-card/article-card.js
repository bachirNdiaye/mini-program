Component({
  properties: {
    image: String,
    category: String,
    title: String,
    avatar: String,
    author: String,
    date: String
  },
  methods: {
    onTap() {
      wx.navigateTo({
        url: '/pages/detail/detail',
      });
    }
  }
})
