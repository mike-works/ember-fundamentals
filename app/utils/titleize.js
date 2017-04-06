import Ember from 'ember';

const { computed } = Ember;

// The macro
export default function titleize(k) {
  // the computed property
  return computed(k, {
    get() {
      // inside here, "this" is the obj we're installed on
      let s =  this.get(k) || '';
      return s
        .split(/[\s]+/g)
        .map((piece) => {
          if (piece.length === 0) {
            return '';
          }
          return piece[0].toUpperCase() + piece.substring(1).toLowerCase();
        })
        .join(' ');
    }
  });
}
