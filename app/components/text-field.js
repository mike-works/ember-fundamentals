import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

const TextFieldComponent = Component.extend({
  // actions: {
  //   /**
  //    *
  //    * @param {KeyboardEvent} evt
  //    */
  //   inputChanged(s) {
  //     this.set('value', s);
  //   }
  // }
});

TextFieldComponent.prototype.layout = hbs`
  {{#if shown}}
    <button onClick={{action (mut shown) false}}>
      Hide
    </button>
  {{else}}
    <button onClick={{action (mut shown) true}}>
      Show
    </button>
  {{/if}}

  <label>{{name}}</label>
  <input value={{txt}}
    onKeyUp={{action (mut txt) value='target.value'}} />
  {{value}}
`;

export default TextFieldComponent;
