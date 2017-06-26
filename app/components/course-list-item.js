import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNames: ['course-list-item'],
    attributeBindings: ['model.title:data-name']
});
