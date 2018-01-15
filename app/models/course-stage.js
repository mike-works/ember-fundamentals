import DS from 'ember-data';

export default DS.Model.extend({
  course: DS.belongsTo('course'),
  title: DS.attr('string'),
  slug: DS.attr('string'),
  description: DS.attr('string')
});
