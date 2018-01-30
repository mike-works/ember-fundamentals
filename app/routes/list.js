import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{id: 1, name: 'One'}, {id: 2, name: 'Two'}];
  }
});
