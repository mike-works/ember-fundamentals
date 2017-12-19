import Component from '@ember/component';

export default class MikeInput extends Component {
  // types for possible things passed in
  public type: string;
  public _value: string;
  
  // Create a functon (can later use w/ {{action}})
  clearContents() {
    this.set('_value', '');
  }

}
// Add default prop values to the prototype
MikeInput.reopen({
  type: 'text' 
});


// const Old = Component.extend({
//   _value: '',
//   actions: {
//     clearContents() {
//       this.set('_value', '');
//     }
//   }
// })
// export default Old;