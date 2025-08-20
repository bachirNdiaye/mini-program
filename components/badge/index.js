Component({
  properties: {
    name: String,
    active: { type: Boolean, value: false }
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', { name: this.data.name });
    }
  }
})
