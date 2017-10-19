import Route from '@ember/routing/route';
import allCourses from '../course-list';

export default Route.extend({
  model(params) {
    let found = allCourses.filter(c => c.title === params.name);
    switch (found.length) {
      case 0: throw new Error('No course found!');
      case 1: break;
      default: throw new Error('Too many courses found!');
    }
    return found[0];
  }
});
