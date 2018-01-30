import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list', {path: 'list'}, function() {
    // this.route('index', { path: ''})
    this.route('item', {path: 'item/:id' });
  });

  this.route('course', {
    path: 'course/:id'
  });
});

export default Router;
