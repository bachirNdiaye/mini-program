Component({
  properties: {
    type: { type: String, value: 'home' } // "home" | "discover" | "detail"
  },
  data: {
    showBack: false,
    showMenu: false,
    showSearch: false,
    showNotif: false,
    showBookmark: false,
    showOptions: false
  },
  lifetimes: {
    attached() {
      this.updateConfig();
    }
  },
  methods: {
    updateConfig() {
      let config = {};
      switch(this.properties.type) {
        case 'home':
          config = { showMenu: true, showSearch: true, showNotif: true };
          break;
        case 'discover':
          config = { showBack: true };
          break;
        case 'detail':
          config = { showBack: true, showBookmark: true, showOptions: true };
          break;
      }
      this.setData(config);
    },

    onBack() { this.triggerEvent('back'); },
    onMenu() { this.triggerEvent('menu'); },
    onSearch() { this.triggerEvent('search'); },
    onNotif() { this.triggerEvent('notif'); },
    onBookmark() { this.triggerEvent('bookmark'); },
    onOptions() { this.triggerEvent('options'); }
  }
})
