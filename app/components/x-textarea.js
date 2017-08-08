import Ember from 'ember';

export default Ember.Component.extend({
  value: 'This is some stuff, but it\'s a little too long. This is some stuff, but it\'s a little too long. This is some stuff, but it\'s a little too long',
  limit: 140,

  overCount: Ember.computed('value.length', 'limit', function() {
    return this.get('value.length') > this.get('limit');
  })
});
