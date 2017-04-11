import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('application')
      .filter((x) => x.title === params.id)[0];
  }
});
