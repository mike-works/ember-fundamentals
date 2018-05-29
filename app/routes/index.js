import Route from '@ember/routing/route';
import fetch from 'fetch';
// export const ALL_COURSES = fetch('https://api.mike.works/api/v1/courses')
//   .then(response => response.json())
//   .then(responseData => {
//     return responseData.data.map(item => {
//       return Object.assign({ id: item.id }, item.attributes);
//     })
//   })

export default class extends Route {
  async model() {
    let response = await fetch('https://api.mike.works/api/v1/courses')
    let responseData = await response.json();
    return responseData.data.map(item => {
      return Object.assign({ id: item.id }, item.attributes);
    })
  }
}