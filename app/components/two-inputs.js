import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  str: '',
  _upperValue: computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set: function(_, upper) {
      this.set('str', upper.toLowerCase());
      return upper.toUpperCase();
    }
  })
});
