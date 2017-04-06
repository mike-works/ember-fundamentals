import Ember from 'ember';

export function placeholderUrl(params, hash = {}) {
  let w = Math.max(10, hash.w || 100);
  let h = Math.max(10, hash.h || 120);
  return `http://placekitten.com/${w}/${h}`;
}

export default Ember.Helper.helper(placeholderUrl);
