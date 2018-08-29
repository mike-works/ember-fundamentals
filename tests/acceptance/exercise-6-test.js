import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import require from 'require';

if (
  require.has('@mike-works/ember-fundamentals/routes/course') &&
  !require.has('ember-network/fetch') &&
  !require.has('fetch')
) {
  module('Exercise 6 | Basic Routing Structure', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
      let $phoenixLink = find('ul a[href="/course/Phoenix%20Fundamentals"]');
      assert.equal(
        $phoenixLink.length,
        1,
        'Link with href="/course/Phoenix%20Fundamentals" is present on the page'
      );
      assert.ok(
        $phoenixLink
          .text()
          .trim()
          .indexOf('Phoenix Fundamentals') >= 0,
        'Phoenix Fundamentals is present in a link on the "/" page'
      );

      let $emberBasicsLink = find('ul a[href="/course/Ember%20Basics"]');
      assert.equal(
        $emberBasicsLink.length,
        1,
        'Link with href="/course/Ember%20Basics" is present on the page'
      );
      assert.ok(
        $emberBasicsLink
          .text()
          .trim()
          .indexOf('Ember Basics') >= 0,
        'Ember Basics is present in a link on the "/" page'
      );

      await click('ul a[href="/course/Ember%20Basics"]');

      assert.ok(find('h1').length > 0, 'At least one H1 on the page');
      assert.ok(
        find('h1.course-title').length > 0,
        'H1 has a class .course-title'
      );
      assert.equal(
        find('h1.course-title').text(),
        'Ember Basics',
        'Course title is rendered inside the h1.course-title'
      );
    });
  });
}
