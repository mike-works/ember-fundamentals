import Ember from 'ember';

export default Ember.Route.extend({
    model({ id }) {
        return this.modelFor('application').filterBy('slug', id)[0];
    }
});
