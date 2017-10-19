import EmberObject from '@ember/object';

const Course = EmberObject.extend({
  title: 'No Title',
  description: '',
  init() {
    this._super(...arguments);
    this.set('languages', []);
    this.set('tags', []);
  }
});

Course.reopenClass({
  _languages: { js: 'JavaScript', java: 'Java', pl: 'Perl' },
  languageName(abbrev) {
    return Course._languages[abbrev] || 'Unknown';
  }
});

export default Course;