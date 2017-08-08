/*
 * For derived state
 * 1. do you need to lazily evaluate it
 * 2. do you need to update in response to upstream changes 
 */

// If answer to 1 is "no"
import Ember from 'ember';

Ember.Object.extend({
  init() {
    this._super(...arguments);
    this.set('fullName', `${this.get('firstName')} ${this.get('lastName')}`);
  }
})

// If answer to 1 is "yes" and 2 is "no"

Ember.Object.extend({
  _fullName: null,
  get fullName() {
    if (!this._fullName) {
      this._fullName = `${this.get('firstName')} ${this.get('lastName')}`;
    }
    return this._fullName;
  }
})

// If answer to 1 is "yes" and 2 is "no"
Ember.Object.extend({
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});