import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['course-list-item'],
  // $('.course-list-item[data-name="Ember Basics"]');
  attributeBindings: ['model.title:data-name']
});

