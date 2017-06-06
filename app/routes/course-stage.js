import Ember from 'ember';

export default Ember.Route.extend({
    model({ id, stage }) {
        return this.store.findRecord('course', id)
            .then((course) => {
                let courseId = course.get('id');
                return this.store.queryRecord('course-stage', {
                    stage,
                    courseId
                });
            });


        // return this.modelFor('application').filterBy('slug', id)[0];
    }
});
