import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let { id: title } = params;
    return this.modelFor('application')
      .filter(course => course.title === title)[0];
  }
});
