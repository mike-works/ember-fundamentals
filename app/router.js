import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('post', {
      path: ':id'
    });
  });

  this.route('course', {
    path: 'course/:id'
  });
});

export default Router;
