import Ember from 'ember';

const Course = Ember.Object.extend({
  title: 'No Title',
  description: '',
  tags: null,
  languages: null,
  init() {
    this._super(...arguments);
    this.set('tags', []);
    this.set('languages', []);
  }
});

Course.reopenClass({
  _languages: {
    js: 'JavaScript'
  },
  languageName(lang) {
    return this._languages[lang] || 'Unknown';
  }
});

export default Course;
