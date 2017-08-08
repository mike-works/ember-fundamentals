import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    openInfo() {
      this.toggleProperty('isOpen');
    }
  }
});
