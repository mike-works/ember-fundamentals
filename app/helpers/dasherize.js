import Ember from 'ember';


/**
 * {{dasherize "Hello World!"}}
 * "hello-world"
 */
export function dasherize(params/*, hash*/) {
  let str = params[0];
  let final = str
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w^\-]/g, '');

  return final;
}

export default Ember.Helper.helper(dasherize);
