/**
 * A Derived state
 * B Evaluate lazily
 * C Update in response to dependency changes
 */

/** Only A */
Ember.Object.extend({
    init() {
        this._super(...arguments);
        this.fullName = this.firstName + this.lastName;
    }
})

/** Only A & B */
let MyType = Ember.Object.extend({
    _fullNameValue: null,
    get fullName() {
        if (this._fullNameValue === null) {
            this._fullNameValue = this.get('firstName') + this.get('lastName');
        }
        return this._fullNameValue;
    }
});
let x = MyType.create({});
console.log(x.fullName);