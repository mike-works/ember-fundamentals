import Ember from 'ember';

export default Ember.Component.extend({
    switchedOn: false,
    actions: {
        doSomething() {
            this.toggleProperty('switchedOn');
        }
    }
});
