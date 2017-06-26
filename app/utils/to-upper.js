import Ember from 'ember';

const { computed } = Ember;

export default function upper(propName) {
  return computed(propName, {
    get() {
      return this.get(propName).toUpperCase();
    },
    set: function(_, upper) {
      this.set(propName, upper.toLowerCase());
      return upper.toUpperCase();
    }
  })
}