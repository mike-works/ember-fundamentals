import Component from '@ember/component';

export default Component.extend({
  type: 'text',
  isDisabled: false,
  actions: {
    toggleDisabled() {
      this.set('isDisabled', !this.get('isDisabled'));
    }
  }
});
