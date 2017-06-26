import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    'image-info': DS.attr(),
    summary: DS.attr('string'),
    slug: DS.attr('string')
});
