import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  r: 255,
  rType: computed('r', function (){
    return typeof this.get('r')
  }),
  g: '200',
  b: '200',

  _hex: computed('r', 'g', 'b', {
    get() {
      let { r, g, b } = this.getProperties('r', 'g', 'b');
      return [r, g, b]
        .map((cc) => parseInt(cc, 10))
        .map((cc) => cc.toString(16))
        .map((cc) => cc.length < 2 ? `0${cc}` : cc)
        .join('').toUpperCase().htmlSafe();
    },
    set(_, hex) {
      let [ r, g, b ] = [0, 2, 4]
        .map((offset) => hex.substring(offset, offset + 2))
        .map((hexDigStr) => parseInt(hexDigStr, 16).toString());
      this.setProperties({r, g, b});
      return hex.toUpperCase();
    }
  })
});
