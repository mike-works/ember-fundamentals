import { helper } from '@ember/component/helper';

export function placeholderUrl(_, hash) {
  let { w = 100, h = 120 } = hash;
  let ww = Math.max(10, w);
  let hh = Math.max(10, h);
  return `http://placekitten.com/${ww}/${hh}`;
}

export default helper(placeholderUrl);
