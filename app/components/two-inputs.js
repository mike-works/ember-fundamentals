import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        this._initialUpper = null;
        Object.defineProperty(this, 'initialUpper', {
            get() {
                if (!this._initialUpper) {
                    this._initialUpper = this.get('str').toUpperCase();
                }
                return this._initialUpper;
            }
        })
    },
    upper: Ember.computed('str', {
        get() {
            return this.get('str').toUpperCase();
        },
        set(_, newVal) {
            this.set('str', newVal.toLowerCase());
            return newVal.toUpperCase();
        }
    }),
    lower: Ember.computed('str', {
        get() {
            return this.get('str').toLowerCase();
        },
        set(_, newVal) {
            this.set('str', newVal.toLowerCase());
            return newVal.toLowerCase();
        }
    })
});
