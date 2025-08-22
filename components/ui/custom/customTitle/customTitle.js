Component({
  properties: {
    title: String
  },
  methods: {
    handleClick() {
      console.log('customTitle handleClick');
      this.triggerEvent('viewAll');
    }
  }
});