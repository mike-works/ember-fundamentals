import Ember from 'ember';
// import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('course');
    // return fetch('https://api.mike.works/api/v1/courses')
    //   .then((response) => response.json())
    //   .then((jsonData) => {
    //     return jsonData.data.map((course) => course.attributes);
    //   });
  }
});
