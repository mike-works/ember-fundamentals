import Ember from 'ember';

export function dasherize(
  params /* [ ], */
 /* hash      { } */) {
  let fullName = params[0];
  return fullName
    .split(/[\s]+/g)
    .map((tok) => tok.toLowerCase())
    .join('-');
}

export default Ember.Helper.helper(dasherize);
