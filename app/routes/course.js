import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let courses = this.modelFor('application');
        return courses.findBy('title', params.id);
        // return courses
        //     .filter((c) => c.title === params.id)[0];
    }
}); 
