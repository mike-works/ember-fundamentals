import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['course-list-item'],
  attributeBindings: ['model.title:data-name'],
  isEmber: computed('model.title', {
    get() {
      return (this.get('model.title') || '')
        .toLowerCase()
        .indexOf('ember') >= 0;
    }
  })
});
