import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // implied INDEX
  // this.route('posts', { path: '/posts'});
  // this.route('posts.comments', { path: '/posts/comments' });
  // this.route('posts.author', { path: '/posts/author' });
  this.route('posts', function() {
    this.route('comments');
    this.route('author');
  })

  this.route('course', {
    path: 'course/:id'
  });
});

export default Router;
