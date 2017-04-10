import Ember from 'ember';

// let uppercase = hash.uppercase;
export function makeName(params, { uppercase }) {
  let str = `${params[0]} ${params[1]}`;
  if (uppercase) {
    str = str.toUpperCase();
  }
  return str;
}

export default Ember.Helper.helper(makeName);
