import Ember from 'ember';

const Course = Ember.Object.extend({
  title: 'No Title',
  description: '',
  // tags: [], < initialized per instance
  // languages: [],  < initialized per instance
  init() {
    this.set('tags', []);
    this.set('languages', []);
  }
});

Course.reopenClass({
  _languages: {js: 'JavaScript'},
  languageName(abbrev) {
    return Course._languages[abbrev] || 'Unknown';
  }
});

export default Course;