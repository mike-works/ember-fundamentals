// import Ember from 'ember';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default class TwoInputs extends Component {
  public str: string;
  public uppercase = computed('str', {
    get() {
      return this.get('str').toUpperCase();
    },
    set(_, newUpperVal: string) {
      this.set('str', newUpperVal.toLowerCase());
      return newUpperVal.toUpperCase();
    }
  });
}

