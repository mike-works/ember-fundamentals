import Route from '@ember/routing/route';
import fetch from 'fetch';
// import { ALL_COURSES } from './index';

export default class extends Route {
  async model(params) {
    let { id } = params;
    let response = await fetch(`https://api.mike.works/api/v1/courses/${id}`);
    let responseData = await response.json();
    return Object.assign({ id: responseData.data.id }, responseData.data.attributes);
    // return responseData.data.map(item => {
    //   return Object.assign({ id: item.id }, item.attributes);
    // });
  }
}
