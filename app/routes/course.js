import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let id = params.id; 
    return this.store.findRecord('course', id);
  }
});
