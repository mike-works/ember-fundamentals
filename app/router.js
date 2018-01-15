import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index', {path: ''}); // IMPLIED
  this.route('course', { path: 'course/:id' }, function() {
    // this.route('index', {path: ''}); // IMPLIED
    this.route('stage', {
      path: '/stage/:stageId'
    });
  });

});

export default Router;
