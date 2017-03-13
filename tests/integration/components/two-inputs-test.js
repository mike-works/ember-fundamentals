import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


if (require.entries['emberli/components/two-inputs']) {

moduleForComponent('two-inputs', 'Integration | Component | two inputs', {
  integration: true
});

test('Basic structure', function(assert) {

  this.render(hbs`{{two-inputs str='Hello'}}`);
  assert.equal(this.$('input').length, 2, 'two inputs inside two-inputs component');
  assert.equal(this.$('input.lowercase-field').length, 1, 'One input.lowercase-field is present');
  assert.equal(this.$('input.uppercase-field').length, 1, 'One input.uppercase-field is present');

});

test('Initial state {{two-inputs str=\'Hello\'}}', function(assert) {

  this.render(hbs`{{two-inputs str='Hello'}}`);
  assert.equal(this.$('input.lowercase-field').val(), 'Hello', "input.lowercase-field's value is initially 'Hello'");
  assert.equal(this.$('input.uppercase-field').val(), 'HELLO', "input.uppercase-field's value is initially 'HELLO'");

});

test('Upstream state changes {{two-inputs str=\'Hello\'}}', function(assert) {
  this.set('myString', 'Hello');

  this.render(hbs`{{two-inputs str=myString}}`);
  assert.equal(this.$('input.lowercase-field').val(), 'Hello', "input.lowercase-field's value is initially 'Hello'");
  assert.equal(this.$('input.uppercase-field').val(), 'HELLO', "input.uppercase-field's value is initially 'HELLO'");
  this.set('myString', 'Goodbye');
  assert.equal(this.$('input.lowercase-field').val(), 'Goodbye', "After str changed from outside the component, input.lowercase-field's value has changed to'Goodbye'");
  assert.equal(this.$('input.uppercase-field').val(), 'GOODBYE', "After str changed from outside the component, input.uppercase-field's value has changed to'GOODBYE'");
  this.$('input.uppercase-field').val('GOODBYEE');
  this.$('input.uppercase-field').triggerHandler('input');
  this.$('input.uppercase-field').triggerHandler('change');
  assert.equal(this.$('input.lowercase-field').val(), 'goodbyee', "Typing a letter in uppercase-field, causes lowercase-field to update");
});

}