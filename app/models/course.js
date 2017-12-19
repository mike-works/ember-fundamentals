import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  slug: DS.attr('string'),
  'image-info': DS.attr()
});
