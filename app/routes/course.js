import Route from '@ember/routing/route';

export default class CourseRoute extends Route {
  model(params) {
    let { id } = params; // let id = params.id;
    let allCourses = this.modelFor('application');
    return allCourses.filter(c => c.title === id)[0];
  }
}
