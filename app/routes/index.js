import Ember from 'ember';
// import fetch from 'fetch';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('course');
        // return fetch('https://api.mike.works/api/v1/courses')
        //     .then((resp) => resp.json())
        //     .then((jsonData) => {
        //         return jsonData.data
        //             .map((item) => item.attributes);
        //     });
    }
});
