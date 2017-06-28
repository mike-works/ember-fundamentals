import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['course-list-item'],
    tagName: 'li',
    attributeBindings: ['model.title:data-name']
});
