import Component from '@ember/component';

export default Component.extend({
  type: 'text',
  temp: {
    target: {
      value: 'hello world'
    }
  },
  isDisabled: false,
  actions: {
    toggleDisabled() {
      this.set('isDisabled', !this.get('isDisabled'));
    }
  }
});
