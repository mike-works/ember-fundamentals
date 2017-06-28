import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
   title: attr('string'),
   summary: attr('string'),
   slug: attr('string'),
   'image-info': attr()
});
