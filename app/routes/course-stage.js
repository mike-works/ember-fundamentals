import Ember from 'ember';

export default Ember.Route.extend({
  _findStage(course, stage_id) {
    return course.get('stages').then((stages) => {
      return stages.filterBy('slug', stage_id)[0];
    });
  },
  model({course_id, stage_id}) {
    let course = this.store.peekRecord('course', course_id);
    if(course) {
      return this._findStage(course, stage_id);
    } else {
      return this.store.findRecord('course', course_id).then((course) => {
        return this._findStage(course, stage_id);
      });
    }
  }
});
