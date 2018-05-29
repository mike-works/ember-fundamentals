import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('items', [
      { name: 'grapes', price: 1.99, qty: 4 },
      { name: 'lemons', price: 1.49, qty: 1 },
      { name: 'limes', price: 3.99, qty: 4 },
      { name: 'cherries', price: 1.19, qty: 2 }
    ]);
  },
  discount: 0.05,
  total: computed('discount', 'items.@each.{price,qty}', function() {
    // console.log('recalculating');
    return (
      (1 - this.get('discount')) *
      this.get('items')
        .reduce((tot, cartItem) => {
          return tot + cartItem.price * cartItem.qty;
        }, 0)
        .toFixed(2)
    );
  }),

  actions: {
    updateDiscount() {
      this.set('loading', true);
      setTimeout(() => {
        if (!this.isDestroyed && !this.isDestroying) {
          this.set('loading', false);
          let d = this.get('discount');
          this.set('discount', d + 0.01);
        }
      }, 2000);
    }
  }
});
