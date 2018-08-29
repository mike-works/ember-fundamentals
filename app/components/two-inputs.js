import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  str: '',
  upperStr: computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set(_key, newVal) {
      this.set('str', newVal.toLowerCase());
      return newVal.toUpperCase();
    }
  })
});
