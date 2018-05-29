import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  upperStr: computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set(_key, upper) {
      this.set('str', upper.toLowerCase());
      return upper.toUpperCase();
    }
  }),
  actions: {
    updateLower(newStr) {
      this.set('str', newStr.toLowerCase());
    }
  }
});
