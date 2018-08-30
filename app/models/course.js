// @ts-check
import DS from 'ember-data';
// http://localhost:4200/course/angular-fundamentals-7ed6c8b
export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  description: DS.attr('string'),
  'image-info': DS.attr()
});
