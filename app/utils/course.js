// @ts-check
// importing Ember so we can use Ember.Object
import Ember from 'ember';

// Creating a new type using Ember.Object.extend
const Course = Ember.Object.extend({
  title: "No Title",
  description: "",
  init() {
    this._super();
    this.set('tags', []); // this.tags = [];
    this.set('languages', []);
  }
});

Course.reopenClass({
  _langs: {js: 'JavaScript'},

  languageName(abbrev) {
    return this._langs[abbrev] || 'Unknown';
  }
});

// Making this new type available to those who import
// this module, via the "default export"
export default Course;