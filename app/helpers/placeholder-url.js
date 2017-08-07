import Ember from 'ember';

export function placeholderUrl(params, hash = {}) {
  let { w, h } = hash;
  h = h || 120;
  w = w || 100;
  return `http://placekitten.com/${Math.max(w, 10)}/${Math.max(h, 10)}`;
}

export default Ember.Helper.helper(placeholderUrl);
