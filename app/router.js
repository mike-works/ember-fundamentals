import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('course', { path: 'course/:id' });

  this.route('course-stage', {
    path: 'course/:course_id/:stage_id'
  });
});

export default Router;
