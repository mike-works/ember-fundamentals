import { helper } from '@ember/component/helper';

export function placeholderUrl(params, hash) {
  let { w, h } = hash;
  let nw = Math.max(10, w || 100);
  let nh = Math.max(10, h || 120);
  return `http://placekitten.com/${nw}/${nh}`;
}

export default helper(placeholderUrl);
