import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    slug: DS.attr('string'),
    agendaItems: DS.hasMany('course-agenda-item'),
    course: DS.belongsTo('course')
});
