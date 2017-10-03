import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  type: 'text',
  classNames: ['x-field']  
});

// function makeSetter(propName) {
//   return function(newVal) {
//     this.set(propName, newVal);
//   }
// }
