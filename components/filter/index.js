Component({
  data: {
    keyword: ''
  },
  methods: {
    onInput(e) {
      this.setData({ keyword: e.detail.value });
      this.triggerEvent('search', e.detail.value); // envoie l'événement au parent
    },
    onFilter() {
      this.triggerEvent('filter'); // déclenche l'événement filter
    }
  }
})
