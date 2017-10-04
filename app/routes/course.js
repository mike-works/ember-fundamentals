import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let id = params.id; 
    let courses = this.modelFor('application');
    return courses.filter(item => item.slug === id)[0];
  }
});
