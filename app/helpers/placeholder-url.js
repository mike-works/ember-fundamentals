import Ember from 'ember';

export function placeholderUrl(_, hash = {}) {
  let { w, h } = hash;
  w = Math.max(10, w || 100);
  h = Math.max(10, h || 120);
  return `http://placekitten.com/${w}/${h}`;
}

export default Ember.Helper.helper(placeholderUrl);
