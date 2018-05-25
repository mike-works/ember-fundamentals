import { helper } from '@ember/component/helper';

export function placeholderUrl(_params, { w = 100, h = 120 }) {
  w = Math.max(10, w);
  h = Math.max(10, h);
  // let w = hash.w; let h = hash.h;
  return `http://placekitten.com/${w}/${h}`;
}

export default helper(placeholderUrl);
