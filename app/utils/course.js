import Ember from 'ember';

const Course = Ember.Object.extend({
  title: 'No Title',
  description: '',
  init() {
    this._super(...arguments);
    this.tags = []; // this.set('tags', [])
    this.languages = [];
  }
});

Course._languages = {js: 'JavaScript'};

Course.languageName = function(abbr) {
  return Course._languages[abbr] || 'Unknown';
};

export default Course;