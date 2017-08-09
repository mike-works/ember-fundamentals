import Ember from 'ember';

export default Ember.Component.extend({
  str: 'no str was passed to me',
  _upperStr: Ember.computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set(_, newVal) {
      this.set('str', newVal.toLowerCase());
      return newVal.toUpperCase();
    }
  })
});
