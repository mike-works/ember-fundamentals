import { test } from 'qunit';
import moduleForAcceptance from 'emberli/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test1');

test('click in from the course list', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });

  click('a[href="/course/ember-cli-basics-ec71a23"]');

  andThen(function() {
    assert.equal(currentURL(), '/course/ember-cli-basics-ec71a23');
    assert.equal(find('ul.stages li').length, 3, 'Three course-stage found');
  });
});
