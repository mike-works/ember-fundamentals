import Ember from 'ember';

export function placeholderUrl(params, hash = {}) {
  /**
   * Note that we'll fall back to our defaults
   * instead of minimums if 0 is passed for either
   * dimension.
   */
  let w = Math.max(10, hash.w || 100);
  let h = Math.max(hash.h || 120, 10);
  return `http://placekitten.com/${w}/${h}`;
}

export default Ember.Helper.helper(placeholderUrl);
