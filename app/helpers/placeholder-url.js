import { helper } from '@ember/component/helper';

export function placeholderUrl(_params, hash) {
  // const { w = 100, h = 120 } = hash;
  const w = hash.w || 100;
  const h = hash.h || 120;
  return `http://placekitten.com/${
    Math.max(10, w)
  }/${
    Math.max(10, h)
  }`;
}

export default helper(placeholderUrl);
