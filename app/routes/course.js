import Route from '@ember/routing/route';
// import fetch from 'fetch';
// import { ALL_COURSES } from './index';

export default class extends Route {
  model(params) {
    return this.store.findRecord('course', params.id);
  }
}
