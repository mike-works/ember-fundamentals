import Ember from 'ember';

const Course = Ember.Object.extend({
  title: "No Title",
  description: "",
  // tags: [],
  // languages: [],
  init() {
    this._super(...arguments);
    this.set('tags', []);
    this.set('languages', []);
  }
});

Course.reopenClass({
  _langs: {
    js: "JavaScript"
  },
  languageName(id) {
    return this._langs[id] || "Unknown";
  }
})

export default Course;