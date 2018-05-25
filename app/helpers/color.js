import { helper } from '@ember/component/helper';

function decimalToHex(dec) {
  let hx = dec.toString(16);
  return hx.length === 1 ? `0${hx}` : hx;
}

export function color(channels, hash) {
  let caps = hash.caps || false;
  let toReturn = channels
    .map(decimalToHex)
    .join('');
  if (caps) toReturn = toReturn.toUpperCase();
  return toReturn;
}

export default helper(color);
