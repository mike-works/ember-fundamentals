import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let courseSlug = params.name;
    return this.store.findRecord('course', courseSlug)
  }
});
