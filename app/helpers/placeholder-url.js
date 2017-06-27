import Ember from 'ember';

export function placeholderUrl(_, hash = {}) {
  let { w, h } = hash;
  h = Math.max(10, h || 120);
  w = Math.max(10, w || 100);

  return `http://placekitten.com/${w}/${h}`;
}

export default Ember.Helper.helper(placeholderUrl);
