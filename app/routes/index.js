import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';
// import fetch from 'fetch';
// export const ALL_COURSES = fetch('https://api.mike.works/api/v1/courses')
//   .then(response => response.json())
//   .then(responseData => {
//     return responseData.data.map(item => {
//       return Object.assign({ id: item.id }, item.attributes);
//     })
//   })

export default class extends Route {
  model() {
    let cached = this.store.peekAll('course');
    return isEmpty(cached) ? this.store.findAll('course') : cached;
  }
}