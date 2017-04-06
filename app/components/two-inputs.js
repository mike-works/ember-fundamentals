import Ember from 'ember';

const { computed } = Ember;

function toUpper(k) {
  return computed(k, {
    get() {
      return this.get(k).toUpperCase();
    },
    set(key, newVal) {
      this.set(k, newVal.toLowerCase());
      return newVal;
    }
  });
}

export default Ember.Component.extend({
  str: 'Hello',
  upper: toUpper('str')
});
