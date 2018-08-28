import { helper } from '@ember/component/helper';

export function spaceIze(params/*, hash*/) {
  /** @type {string} */
  const planet = params[0];
  return planet.split('').join(' ');
}

export default helper(spaceIze);
