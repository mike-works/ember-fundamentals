import EmberObject from '@ember/object';


const LANGUAGES = {
  js: 'JavaScript'
};

// // ES5
// const Course = EmberObject.extend({
//   title: 'No Title',
//   description: '',
//   // tags: [],     // BAD (shared)
//   // languages: [] // BAD (shared)
//   init() {
//     this._super(...arguments);
//     this.set('tags', []);
//     this.set('languages', []);
//   }
// });

// Course.languageName = (abbrev) => {
//   return LANGUAGES[abbrev] || 'Unknown';
// };

// ES6
class Course extends EmberObject {
  constructor() {
    super();
    this.tags = [];
    this.languages = [];
  }
  static languageName(abbrev) {
    return LANGUAGES[abbrev] || 'Unknown';
  }
}
Course.prototype.title = 'No Title';
Course.prototype.description = '';

// // Future
// class Course extends EmberObject {
//   title = 'No Title';
//   description = '';
//   tags = [];
//   languages = [];
//   static languageName(abbrev) {
//     return LANGUAGES[abbrev] || 'Unknown';
//   }
// }



export default Course;
