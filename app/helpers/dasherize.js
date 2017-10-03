import Ember from 'ember';

export function dasherize(params, {delim}) {
  return params[0]
    .split(/\s+/g)
    .map(s => s.toLowerCase())
    .join(delim || '-');
}

export default Ember.Helper.helper(dasherize);
