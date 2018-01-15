import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  async model({stageId}) {
    let course = this.modelFor('course');
    let stages = await course.get('stages');
    let stage =  stages.toArray().filterBy('id', stageId)[0];

    // let stage = course.get('stages')
    //     .toArray()
    //     .filterBy('id', stageId)[0];
    return {
      course,
      stage,
    }; 
  }
});
