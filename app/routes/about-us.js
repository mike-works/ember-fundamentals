import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {company: 'LinkedIn', location: 'Beijing'}
  }
});
