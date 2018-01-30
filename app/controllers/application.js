import { computed } from '@ember/object';
import Controller from '@ember/controller';

class ApplicationController extends Controller {
  constructor() {
    super();
    this.set('x', 5);
    // this.courses = ALL_COURSES;
  }
}

let c = 0;
ApplicationController.prototype.Xsq = computed('x', {
  get() {
    console.log('calculated ', ++c, 'times');
    let x = this.get('x');
    return x * x;
  },
  set(_, newVal) {
    let x = Math.sqrt(parseFloat(newVal));
    this.set('x', x);
    return newVal;
  }
});

export default ApplicationController;
