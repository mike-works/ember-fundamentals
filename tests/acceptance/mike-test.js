import { test } from 'qunit';
import moduleForAcceptance from 'emberli/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | mike');

test('a basic test', function(assert) {
  visit('/');
  
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
  
  click('a[href="/course/ember-cli-basics-ec71a23"]');

  andThen(function() {
    assert.equal(currentURL(), '/course/ember-cli-basics-ec71a23');
  });
});
