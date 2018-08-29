import Component from '@ember/component';
import { computed } from '@ember/object';

function transformString(key /* str */, transformFn) {
  return computed(key, {
    get() {
      return transformFn(this.get(key))
    },
    set(cpKey /* lowerStr */, newVal, oldVal) {
      this.set(`${cpKey}_last`, oldVal);
      this.set(key, newVal);
      return transformFn(newVal);
    }
  })
}

export default Component.extend({
  str: '',
  lowerStr: transformString('str', s => s.toLowerCase()),
  upperStr: transformString('str', s => s.toUpperCase())
});
