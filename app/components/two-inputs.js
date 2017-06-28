import Ember from 'ember';

const { Component, computed} = Ember;

export default Component.extend({
    str: '',
    _upper: computed('str', {
      get() {
          return this.get('str').toUpperCase();
      },
      set(_, upperVal) {
          this.set('str', upperVal.toLowerCase());
          return upperVal.toUpperCase();
      }
    })
});

// KeyboardEvent {
//     target: HTMLInputElement{
//         value: 'I want this'
//     }
// }