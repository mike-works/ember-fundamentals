import EmberObject from '@ember/object';

// ES6
class Course extends EmberObject {
  constructor() {
    super();
    // if (!this.title) { this.title = 'No Title'; }
    if (!this.description) {
      this.description = '';
    }
    if (!this.tags) {
      this.tags = [];
    }
    if (!this.languages) {
      this.languages = [];
    }
  }
  static languageName(abbrev) {
    switch (abbrev) {
      case 'js':
        return 'JavaScript';
      default:
        return 'Unknown';
    }
  }
}

Course.prototype.title = 'No Title';

// ES5
// const Course =
//   EmberObject.extend({
//     title: 'No Title',
//     description: '',
//     init() {
//       this._super(...arguments);
//       this.set('tags', []);
//       this.set('languages', []);
//     }
//   });

// Course.reopenClass({
//   languageName(abbrev) {
//     switch (abbrev) {
//       case 'js': return 'JavaScript';
//       default: return 'Unknown';
//     }
//   }
// });

export default Course;
