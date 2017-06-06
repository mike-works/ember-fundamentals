import { test } from 'qunit';
import moduleForAcceptance from 'emberli/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test1');

test('visiting /', function (assert) {
  // 1
  visit('/');

  // 2
  andThen(function () {
    assert.equal(currentURL(), '/');
    assert.equal(find('.course-title').length, 13, '13 course titles on the / screen');
  });

  // 3
  click('.course-title a');

  // 4
  andThen(function () {
    assert.equal(find('.course-title').text().trim(), 'Ember-CLI Basics', 'Title is correct');
  });

  // 5
  click('.course-stage-item a');

  // 6
  andThen(function () {
    assert.equal(currentURL(), '/course/ember-cli-basics-ec71a23/apps-addons-ea38307');
  });
});
