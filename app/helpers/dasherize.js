import Ember from 'ember';

export function dasherize([input], { lower = false }) {
  input = input.replace(/[\s]+/g, '-');
  if (lower) {
    input = input.toLowerCase();
  }
  return input;
}

export default Ember.Helper.helper(dasherize);
