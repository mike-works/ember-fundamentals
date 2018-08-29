import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {id: 1, name: `Post #${1}`},
      {id: 2, name: `Post #${2}`},
      {id: 3, name: `Post #${3}`}
    ];
  }
});
