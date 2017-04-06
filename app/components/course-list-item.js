import Ember from 'ember';
import titleize from '../utils/titleize';

export default Ember.Component.extend({
  classNames: ['course-list-item'],
  attributeBindings: ['model.title:data-name'],
  formattedTitle: titleize('model.title'),
  formattedDescription: titleize('model.summary')
});
