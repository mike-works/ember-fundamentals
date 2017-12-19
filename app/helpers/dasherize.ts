import { default as Helper, helper } from '@ember/component/helper';

/**
 *  {{dasherize "Airmen Study Guides"}}
 *   --> "airmen-study-guides"
 */

type DasherizeParams = [string];

export function dasherize(
  [ toConvert ]: DasherizeParams,
  hash: { delim?: string }) {
  return toConvert
    .toLowerCase()
    .replace(/[\s_]+/g, hash.delim || '-');
}

export default helper(dasherize);
