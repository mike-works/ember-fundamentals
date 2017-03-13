import { module, test } from 'qunit';

if (require.entries['emberli/helpers/placeholder-url']) {

const placeholderUrl = require('emberli/helpers/placeholder-url').placeholderUrl;

module('Exercise 2 | placeholder-url helper');

// Replace this with your real tests.
test('conventional usage', function(assert) {
  let result = placeholderUrl([], {w: 300, h: 302});
  assert.equal(result, 'http://placekitten.com/300/302', 'w=300, h=302 --> http://placekitten.com/300/302');
});

test('in absense of a dimension, falls back to reasonable values', function(assert) {
  assert.equal(placeholderUrl([], {w: 300}), 'http://placekitten.com/300/120', 'w=300 --> http://placekitten.com/300/120 (120 as default height)');
  assert.equal(placeholderUrl([], {h: 300}), 'http://placekitten.com/100/300', 'h=300 --> http://placekitten.com/100/300 (100 as default width)');
});

test('Enforces minimum dimensions of 10', function(assert) {
  assert.equal(placeholderUrl([], {w: 2}), 'http://placekitten.com/10/120', 'w=2 results in a 10px wide placeholder image');
  assert.equal(placeholderUrl([], {h: 1}), 'http://placekitten.com/100/10', 'h=2 results in a 10px high placeholder image');
});

test('Falls back to default in the absence of options entirely', function(assert) {
  assert.equal(placeholderUrl(), 'http://placekitten.com/100/120', 'if hash is undefined, falls back to 100x120');
});
}