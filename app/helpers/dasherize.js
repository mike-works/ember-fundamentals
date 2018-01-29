import { helper } from '@ember/component/helper';

export function dasherize([str], { delim = '-' }) {
  return str
    .replace(/\s+/g, delim)
    .toLowerCase();
}

export default helper(dasherize);
