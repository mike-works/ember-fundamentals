import { test } from 'qunit';
import moduleForAcceptance from 'emberli/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test1');

test('our acceptance test', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/', 'foo');
    assert.ok(find('.course-list-item').length > 2, 'Some courses on the screen');
  });

  click('.course-list-item[data-name="Phoenix Fundamentals"] a');

  andThen(function() {
    assert.equal(currentRouteName(), 'course', 'On the course page');
    assert.ok(find('li.stage').length > 2, 'Some stages on the screen');
  });
  
  click('ul li:first-child a');

  andThen(function() {
    assert.equal(currentRouteName(), 'course-stage', 'On the course page');
  });
});
