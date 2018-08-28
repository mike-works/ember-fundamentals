import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import require from 'require';

if (require.has('@mike-works/ember-fundamentals/components/course-list-item')) {
  moduleForComponent(
    'course-list-item',
    'Exercise 3 | course-list-item component',
    {
      integration: true
    }
  );

  test('it renders', function(assert) {
    this.render(hbs`{{course-list-item}}`);
    assert.equal(
      this.$()
        .text()
        .trim(),
      ''
    );
  });

  test('DOM structure is as expected', function(assert) {
    this.set('model', {
      title: 'My Course',
      summary: 'A course description',
      'image-info': {
        square2x: {
          url: 'abc'
        }
      }
    });
    this.render(hbs`{{course-list-item model=model}}`);
    let $components = this.$().children('.course-list-item');
    assert.equal(
      $components.length,
      1,
      'Component has top-level class of .course-list-item'
    );
    let prop = $components[0].attributes.getNamedItem('data-name');
    assert.equal(
      prop ? prop.value : null,
      'My Course',
      'Course title can be found in component\'s boundary element, under DOM attribute "data-name"'
    );
    assert.equal(
      $components
        .find('.course-title')
        .text()
        .trim(),
      'My Course',
      'Course title can be found in a .course-title element, within the component'
    );
    assert.equal(
      $components
        .find('.course-summary')
        .text()
        .trim(),
      'A course description',
      'Course summary can be found in a .course-summary element, within the component'
    );
    assert.equal(
      $components.find('img.course-image').attr('src'),
      'abc',
      'Course image can be found in a .course-image img element, within the component'
    );
  });

  test('Rendering performance optimizations', function(assert) {
    this.set('model', {
      title: 'My Course',
      summary: 'A course description',
      'image-info': {
        square2x: {
          url: 'abc'
        }
      }
    });
    this.render(hbs`{{course-list-item model=model}}`);

    this.set('model.title', 'Other course');
    this.set('model.summary', 'Other course description');
    this.set('model.image-info.square2x.url', 'http://placehold.it/200x200');

    let $components = this.$().children('.course-list-item');
    assert.equal(
      $components
        .find('.course-title')
        .text()
        .trim(),
      'My Course',
      'Course title does not update in response to data changes'
    );
    assert.equal(
      $components
        .find('.course-summary')
        .text()
        .trim(),
      'A course description',
      'Course summary does not update in response to data changes'
    );
    assert.equal(
      $components.find('img.course-image').attr('src'),
      'abc',
      'Course image does not update in response to data changes'
    );
  });
}
