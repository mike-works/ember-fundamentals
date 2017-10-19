/**
 * QUESTIONS FOR DERIVED STATE
 * 1. Do we need to calculate the value lazily
 */

 // NO - EAGER & not sensitive to upstream changes
 Ember.Component.extend({
   init() {
     this._super(...arguments);
     this.set('fullName', `${this.get('firstName')} ${this.get('lastName')}`);
   }
 });

 // YES - use a getter and a secret value-based property
 Ember.Component.extend({
  _secret: null,
  get fullName() {
    let val = this.get('_secret');
    if (!val) { //calculate lazily first time
      val = `${this.get('firstName')} ${this.get('lastName')}`;
      this.set('_secret', val);
    }
    return val;
  }
});

/**
 * 2. Do we need to update if dependent properties change?
 */
// NO? --> see above

// YES? --> computed property
Ember.Component.extend({
  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return `${this.get('firstName')} ${this.get('lastName')}`;
    }
  }
});