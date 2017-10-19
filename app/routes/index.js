import Route from '@ember/routing/route';
import allCourses from '../course-list';
export default Route.extend({
  model() {
    return allCourses;
  }
});
