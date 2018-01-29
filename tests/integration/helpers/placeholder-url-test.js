import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import require from 'require';

moduleForComponent('placeholder-url', 'helper:placeholder-url', {
  integration: true
});

if (require.has('ember-fundamentals/helpers/placeholder-url')) {
  // Replace this with your real tests.
  test('conventional usage', function(assert) {
    this.render(hbs`{{placeholder-url w=300 h=302}}`);
    assert.equal(
      this.$()
        .text()
        .trim(),
      'http://placekitten.com/300/302',
      'w=300, h=302 --> http://placekitten.com/300/302'
    );
  });

  test('in absense of a dimension, falls back to reasonable values', function(assert) {
    this.render(hbs`{{placeholder-url w=300}}`);
    assert.equal(
      this.$()
        .text()
        .trim(),
      'http://placekitten.com/300/120',
      'w=300 --> http://placekitten.com/300/120 (120 as default height)'
    );
    this.render(hbs`{{placeholder-url h=300}}`);
    assert.equal(
      this.$()
        .text()
        .trim(),
      'http://placekitten.com/100/300',
      'h=300 --> http://placekitten.com/100/300 (100 as default width)'
    );
  });

  test('Enforces minimum dimensions of 10', function(assert) {
    this.render(hbs`{{placeholder-url w=2}}`);
    assert.equal(
      this.$()
        .text()
        .trim(),
      'http://placekitten.com/10/120',
      'w=2 results in a 10px wide placeholder image'
    );
    this.render(hbs`{{placeholder-url h=1}}`);
    assert.equal(
      this.$()
        .text()
        .trim(),
      'http://placekitten.com/100/10',
      'h=2 results in a 10px high placeholder image'
    );
  });

  test('Falls back to default in the absence of options entirely', function(assert) {
    this.render(hbs`{{placeholder-url}}`);
    assert.equal(
      this.$()
        .text()
        .trim(),
      'http://placekitten.com/100/120',
      'if hash is undefined, falls back to 100x120'
    );
  });
}
