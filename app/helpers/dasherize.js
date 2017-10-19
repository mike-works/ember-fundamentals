import { helper } from '@ember/component/helper';

export function dasherize(params, {delimeter = '-'}) {
  let [first] = params;
  return first
    .split(/\s+/)
    .map(s => s.toLowerCase())
    .join(delimeter);
}

export default helper(dasherize);
