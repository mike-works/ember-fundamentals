import Ember from 'ember';

export function upcase(params) {
  let arg = params[0];
  return arg.toUpperCase() + 'ABC';
}

export default Ember.Helper.helper(upcase);
