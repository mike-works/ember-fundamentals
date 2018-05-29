import Route from '@ember/routing/route';
import { ALL_COURSES } from './index';

export default class extends Route {
  model(params) {
    let { id } = params;
    return ALL_COURSES.then(courses => {
      let items = courses.filter(c => c.title === id);
      return items.length > 0 ? items[0] : null;
    })

  }
}
