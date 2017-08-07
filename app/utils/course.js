import Ember from 'ember';

const Course = Ember.Object.extend({
  title: 'No Title',
  description: '',
  init() {
    this._super(...arguments);
    this.set('tags', []);
    this.set('languages', []);
  }
});

const LANGUAGES = {js: 'JavaScript'};

// Course.reopenClass = function() {...}
Course.reopenClass({
  languageName(abbrevName) {
    return LANGUAGES[abbrevName] || 'Unknown';
  }
})

export default Course;
