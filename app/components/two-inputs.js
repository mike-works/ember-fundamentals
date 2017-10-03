import Ember from 'ember';

export default Ember.Component.extend({
  str: '',
  upperStr: Ember.computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set(_, newUpper) {
      this.set('str', newUpper.toLowerCase());
      return newUpper.toUpperCase();
    }
  })
});
