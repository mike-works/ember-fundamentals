import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
  upperStr: computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set(key, newUpper) {
      this.set('str', newUpper.toLowerCase());
      return newUpper.toUpperCase();
    }
  })
});
