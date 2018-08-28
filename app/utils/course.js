import EmberObject from '@ember/object';

const DEFAULT_TITLE = 'No Title';

// class Course extends EmberObject {
//   tags = [];
//   languages = [];
//   title = 'No Title';
//   description = '';
// }

/// WRONG SOLUTION
// const Course = EmberObject.extend({
//   tags:[],
//   languages:[],
//   title:'No Title',
//   description:''
// })

const Course = EmberObject.extend({
  init() {
    this._super(...arguments);

    if (!this.tags) {
      this.set('tags', []);
    }
    if (!this.languages) {
      this.set('languages', []);
    }
    if (!this.title) {
      this.set('title', DEFAULT_TITLE);
    }
    if (!this.description) {
      this.set('description', '');
    }
  },
});

// Course.languageName = function () {};
Course.reopenClass({
  _languages: { js: 'JavaScript'},
  languageName(abbrev) {
    return this._languages[abbrev] || 'Unknown';
  }
});

export default Course;
