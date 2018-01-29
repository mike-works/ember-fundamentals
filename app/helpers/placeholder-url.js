import { helper } from '@ember/component/helper';

export function placeholderUrl(_, { w = 100, h = 120}) {
  let ww = Math.max(10, w);
  let hh = Math.max(10, h);
  return `http://placekitten.com/${ww}/${hh}`;
}

export default helper(placeholderUrl);
