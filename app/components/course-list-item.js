import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['course-list-item'],
  attributeBindings: ['model.title:data-name']
});
