Component({
  properties: {
    name: String
  },
  methods: {
    handleClick() {
      console.log('Handle Badge Click: ', this.data.name);
      this.triggerEvent('click', { name: this.data.name });
    }
  }
})