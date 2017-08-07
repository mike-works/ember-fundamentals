import Ember from 'ember';

export function dasherize(params, hash) {
  let delim = hash.delim || '-';
  return (params[0] || '').toLowerCase().replace(/[\s]+/g, delim);
}

export default Ember.Helper.helper(dasherize);
