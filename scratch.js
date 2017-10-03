// let o = {
//   firstName: 'Mike',
//   lastName: 'North'
// };

// Object.defineProperty(o, 'fullName', {
//   get() {
//     return `${this.firstName} ${this.lastName}`
//   },
//   set(newVal) {
//     let [first, last] = newVal.split(/\s+/);
//     this.firstName = first;
//     this.lastName = last;
//   }
// })

// console.log('BEFORE', o.fullName);
// o.fullName = 'M N.';
// console.log('AFTER', o.fullName);

import Ember from 'ember';

function twoPartName(propA, propB) {
  return Ember.computed(propA, propB, {
    get() {
      return `${this.get(propA)} ${this.get(propB)}`;
    },
    set(key, newVal) {
      this.set(`_old${key}`, this.get(key));
      let nameParts = newVal.split(' ');
      this.set(propA, nameParts[0]);
      this.set(propB, nameParts[1]);
      return newVal; // Very important to return this
    }
  }) 
}

const Person = Ember.Object.extend({
  firstName: '',
  lastName: '',
  fullName: twoPartName('firstName', 'lastName'),
  backwardsFullName: twoPartName('lastName', 'firstName') 
})


/*
1. Does my work need to be done lazily?
*/
// if NO --> constructor eager calculation
Ember.Object.extend({
  init() {
    this.set('fullName', `${this.firstName} ${this.lastName}`);
  }
});
/*
 * 2. Do I need to be sensitive to upstream changes?
 */
// if NO --> property descriptor
Ember.Object.extend({
  
  _fullName: null,
  get fullName() {
    if (!this._fullName) {
      this._fullName = `${this.firstName} ${this.lastName}`;
    }
    return this._fullName;
  }
});

// if YES --> computed property