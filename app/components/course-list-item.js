import Component from '@ember/component';

export default Component.extend({
  classNames: ['course-list-item'],
  attributeBindings: ['model.title:data-name']
});
