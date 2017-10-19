
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dasherize', 'helper:dasherize', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{dasherize 'Ember            Fundamentals in Beijing' delimeter='==~=='}}`);

  assert.equal(this.$().text().trim(), 'ember==~==fundamentals==~==in==~==beijing', 'test custom delimeter');
});

