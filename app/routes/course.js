import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.modelFor('application')
      .filter((x) => x.slug === id)[0];
  }
});
