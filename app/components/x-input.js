import Component from '@ember/component';

export default Component.extend({
  count: null,
  actions: {
    updateCharCount(evt) {
      this.set('count', evt.target.value.length);
    },
    clear() {
      this.set('value', '');
    }
  }
});
