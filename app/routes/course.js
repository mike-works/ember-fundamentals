import Ember from 'ember';

export default Ember.Route.extend({
    model({ id }) {
        return this.modelFor('application')
            .filter((course) => course.title === id)[0]
    }
});
