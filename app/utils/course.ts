import EmberObject from '@ember/object';

class Course extends EmberObject {
  // Type Information
  public title: string = 'No Title';
  public description: string = '';
  public tags: string[] = [];
  public languages: string[] = [];

  public static languageName(abbrev: string) {
    if (abbrev === 'js') return 'JavaScript';
    else return 'Unknown';
  }
}

Course.prototype

//eslint-disable-next-line
const CourseOld = EmberObject.extend({
  title: 'No Title',
  description: '',
  tags: [],
  languages: [],
  init() {
    this._super(...arguments);
    this.set('tags', []);
    this.set('languages', []);
  }
});
CourseOld.reopenClass({
  languageName(abbrev: string) {
    if (abbrev === 'js') return 'JavaScript';
    else return 'Unknown';
  }
}) 

export default Course;