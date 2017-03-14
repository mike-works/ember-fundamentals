import { test } from 'qunit';
import moduleForAcceptance from 'emberli/tests/helpers/module-for-acceptance';

if (require.entries['emberli/routes/course'] && require.entries['ember-network/fetch']) {
  moduleForAcceptance('Exercise 7 | Async Data');

  test('visiting /', function(assert) {
    visit('/');

    andThen(() => {
      assert.equal(currentURL(), '/');
      let $phoenixLink = find('ul a[href="/course/phoenix-fundamentals-f8c47eb"]');
      assert.equal($phoenixLink.length, 1, 'Link with href="/course/phoenix-fundamentals-f8c47eb" is present on the page');
      assert.ok($phoenixLink.text().trim().indexOf('Phoenix Fundamentals') >= 0, 'Phoenix Fundamentals is present in a link on the "/" page');

      let $emberBasicsLink = find('ul a[href="/course/ember-basics-cf22ed3"]');
      assert.equal($emberBasicsLink.length, 1, 'Link with href="/course/ember-basics-cf22ed3" is present on the page');
      assert.ok($emberBasicsLink.text().trim().indexOf('Ember Basics') >= 0, 'Ember Basics is present in a link on the "/" page');
    });

    click('ul a[href="/course/ember-basics-cf22ed3"]');

    andThen(() => {
      assert.ok(find('h1').length > 0, 'At least one H1 on the page');
      assert.ok(find('h1.course-title').length > 0, 'H1 has a class .course-title');
      assert.equal(find('h1.course-title').text(), 'Ember Basics', 'Course title is rendered inside the h1.course-title');
    });
    
  });
}