import Ember from 'ember';


function upCase(k) {
  return Ember.computed(k, {
    get() {
      return this.get(k).toUpperCase();
    },
    set(key, newVal) {
      this.set(k, newVal.toLowerCase());
      return newVal.toUpperCase();
    }
  })
}

export default Ember.Component.extend({
  upStr: upCase('str')
});
