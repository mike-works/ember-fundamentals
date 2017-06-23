import Ember from 'ember';

export function placeholderUrl(params, hash = {}) {
  let { w, h } = hash;
  w = Math.max(w, 10);
  h = Math.max(h, 10);
  return `http://placekitten.com/${w || 100}/${h || 120}`;
}

export default Ember.Helper.helper(placeholderUrl);
