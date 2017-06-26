import Ember from 'ember';
// import fetch from 'fetch';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('course', params.id);
        // let courses = this.modelFor('application');
        // return courses.findBy('slug', params.id);
        // return fetch(`https://api.mike.works/api/v1/courses/${params.id}`)
        //     .then((resp) => resp.json())
        //     .then((jsonData) => jsonData.data.attributes);

    }
}); 
