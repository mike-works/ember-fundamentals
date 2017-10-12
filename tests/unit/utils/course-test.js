import { module, test } from 'qunit';
import require from 'require';

let Course = require.has('emberli/utils/course');

if (Course) {
  module('Exercise 1 | Modeling Data');

  test('Correct defaults for data', function(assert) {
    let course = Course.create();
    assert.equal(course.get('title'), 'No Title', 'title defaults to "No Title"');
    assert.equal(course.get('description'), '', 'description defaults to empty string');
    assert.deepEqual(course.get('tags'), [], 'tags defaults to empty array');
    assert.deepEqual(course.get('languages'), [], 'languages defaults to empty array');
  });

  test('Adding and removing tags', function(assert) {
    let course = Course.create();
    let otherCourse = Course.create();
    course.get('tags').addObject('front end');
    assert.equal(otherCourse.get('tags').length, 0, 'Adding tags to a course doesn not result in it being added to all courses');
  });

  test('Adding and removing languages', function(assert) {
    let course = Course.create();
    let otherCourse = Course.create();
    course.get('languages').addObject('js');
    assert.equal(otherCourse.get('languages').length, 0, 'Adding languages to a course doesn not result in it being added to all courses');
  });

  test('Getting a language from a language ID', function(assert) {
    assert.equal(Course.languageName('js'), 'JavaScript', 'Course.languageName("js") returns "JavaScript"');
    assert.equal(Course.languageName(null), 'Unknown', 'Course.languageName() returns "Unknown"');
  });
}