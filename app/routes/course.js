import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let courseName = params.name;
    return this.modelFor('application')
      .findBy('title', courseName);
  }
});
