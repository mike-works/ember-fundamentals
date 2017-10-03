import Ember from 'ember';

export function placeholderUrl(_, hash) {
  let { w, h } = hash || {};
  w = Math.max(10, w);
  h = Math.max(10, h);

  return `http://placekitten.com/${w || 100}/${h || 120}`;
}

export default Ember.Helper.helper(placeholderUrl);
