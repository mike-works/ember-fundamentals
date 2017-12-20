import { test } from 'qunit';
import moduleForAcceptance from 'emberli/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | courselist');

test('visiting /courselist', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });

  click('a[href~="/course/node.js-fundamentals-2335407"]');

  andThen(function() {
    assert.equal(currentURL(), "/course/node.js-fundamentals-2335407");
  });
});
