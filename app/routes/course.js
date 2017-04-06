import Ember from 'ember';

export default Ember.Route.extend({
    model({ idd }) {
        return this
            .modelFor('application') 
            .filter((x) => x.title === idd)[0];
    }
});
