import DS from 'ember-data';

const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  title: attr('string'),
  slug: attr('string'),

  course: belongsTo('course'),
  agendaItems: hasMany('course-agenda-item')
});
