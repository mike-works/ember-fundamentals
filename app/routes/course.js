import Route from '@ember/routing/route';
// import fetch from 'fetch';

export default class CourseRoute extends Route {
  model(params) {
    // fetch('url').then(resp => resp.json())
    // let { id } = params; // let id = params.id;
    // let allCourses = this.modelFor('application');
    // return allCourses.findBy('slug', id);
    return this.store.findRecord('course', params.id);
  }
}
