Component({
  data: {
    keyword: ''
  },
methods: {
  onInput(e) {
    this.setData({ keyword: e.detail.value });
    this.triggerEvent('search', e.detail.value); // émet un event "search"
  },
  onFilter() {
    this.triggerEvent('filter');
  }
}

})
