
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dasherize', 'helper:dasherize', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {

  this.render(hbs`{{dasherize "Bangalore India"}}`);
  assert.equal(this.$().text().trim(), 'bangalore-india');

  this.render(hbs`{{dasherize "Bangalore India" delim=", "}}`);
  assert.equal(this.$().text().trim(), 'bangalore, india');
});

