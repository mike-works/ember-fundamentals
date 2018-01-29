import Component from '@ember/component';

export default Component.extend({
  classNames: ['x-input'],
  attributeBindings: ['label:data-field-name'],
  tagName: 'p',
  actions: {
    clear() {
      this.set('value', '');
    }
  }
});
