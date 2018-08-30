import { module, test } from 'qunit';
import { visit, currentURL, findAll, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import require from 'require';

if (
  require.has('@mike-works/ember-fundamentals/routes/course') &&
  (require.has('ember-network/fetch') || require.has('fetch'))
) {
  module('Exercise 7 | Async Data', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function(assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
      let $phoenixLink = findAll(
        'ul a[href="/course/phoenix-fundamentals-f8c47eb"]'
      );
      assert.equal(
        $phoenixLink.length,
        1,
        'Link with href="/course/phoenix-fundamentals-f8c47eb" is present on the page'
      );
      assert.ok(
        ('' + $phoenixLink[0]
          .textContent)
          .trim()
          .indexOf('Phoenix Fundamentals') >= 0,
        'Phoenix Fundamentals is present in a link on the "/" page'
      );

      let $emberBasicsLink = findAll('ul a[href="/course/ember-basics-cf22ed3"]');
      assert.equal(
        $emberBasicsLink.length,
        1,
        'Link with href="/course/ember-basics-cf22ed3" is present on the page'
      );
      assert.ok(
        ($emberBasicsLink[0]
          .textContent + '')
          .trim()
          .indexOf('Ember Basics') >= 0,
        'Ember Basics is present in a link on the "/" page'
      );

      await click('ul a[href="/course/ember-basics-cf22ed3"]');

      assert.ok(findAll('h1').length > 0, 'At least one H1 on the page');
      assert.ok(
        findAll('h1.course-title').length > 0,
        'H1 has a class .course-title'
      );
      assert.equal(
        findAll('h1.course-title')[0].textContent,
        'Ember Basics',
        'Course title is rendered inside the h1.course-title'
      );
    });
  });
}
