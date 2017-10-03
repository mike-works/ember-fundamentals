import Ember from 'ember';
import { default as math, PI } from 'math';

export default Ember.Component.extend({
  classNames: ['course-list-item'],
  tagName: 'li',
  attributeBindings: ['model.title:data-name'],
  didInsertElement() {
    this._super(...arguments);    
    console.log(math.sqrt(4)); // 2
    console.log(PI) // 3.145926...    
  }
});
