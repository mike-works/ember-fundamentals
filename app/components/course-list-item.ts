import Ember from 'ember';
import Component from '@ember/component';
import { computed } from 'ember-decorators/object';

/*
  1. Does laziness benefit me at all?
    --> if NO, do it in the constructor
    --> if YES, proceed ⬇️
  2. Does caching benefit you at all
    --> if NO, just use a getter
    --> if YES, proceed ⬇️
  3. Do you need to be sensitive to upstream changes 
 */

// class CourseListItem extends Component {
//   // // The eager approach
//   // constructor() {
//   //   super();
//   //   this.set(
//   //     'courseImage',
//   //     this.get('model.image-info.square2x.url')
//   //       .replace('square2x', 'fbshare')
//   //   );
//   // }

//   // // The lazy (insensitive) approach
//   // private _courseImageData: string = '';
//   // get courseImage(): string {
//   //   if (!this._courseImageData) {
//   //     // first run
//   //     this._courseImageData =  this.get('model.image-info.square2x.url')
//   //     .replace('square2x', 'fbshare');
//   //   }
//   //   // all runs
//   //   return this._courseImageData;
//   // }

//   public classNames = ['course-list-item'];
//   // https://files.mike.works/courses/3/course_banner_3_square2x.png
//   public attributeBindings = ['model.title:data-name'];

//   @computed('model.image-info.square2x.url')
//   get courseImage() {
//     return this.get('model.image-info.square2x.url')
//     .replace('square2x', 'fbshare');
//   }
// }

export default class CourseLI extends Component {
  classNames = ['course-list-item'];
  attributeBindings = ['model.title:data-name'];

  courseImage = Ember.computed('model.image-info.square2x.url',  function () {
    let url: string|undefined = this.get('model.image-info.square2x.url');
    return url ? url.replace('square2x', 'fbshare') : null;
  })
}
