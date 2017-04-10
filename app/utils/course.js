import Ember from 'ember';

const Course = Ember.Object.extend({
  title: 'No Title',
  description: '',
  // tags: [],
  // languages: [],
  init() {
    this._super(...arguments);
    this.set('tags', []);
    this.set('languages', []);
  }
});

Course.reopenClass({
  _languageNames: {js: 'JavaScript'},
  languageName(key) {
    return this._languageNames[key] || 'Unknown';
  }
});

export default Course;
