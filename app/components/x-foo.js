import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    attributeBindings: ['username:data-twitter-username']
});

