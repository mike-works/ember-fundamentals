import Ember from 'ember';

export default Ember.Route.extend({
    model({ idd }) {
        return this.store.findRecord('course', idd);
    }
});
