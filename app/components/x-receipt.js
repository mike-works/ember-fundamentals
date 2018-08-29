import Component from '@ember/component';
import { computed } from '@ember/object';

function taxSum(...taxNames) {
  // return computed('tax1', 'tax2', 'tax3', function() {
  return computed(...taxNames, function() {
    let tot = 0;
    for (let i = 0; i < taxNames.length; i++) {
      tot += this.get(taxNames[i]);
    }
    return tot;
  })
}

export default Component.extend({
  newItemName: '',
  init() {
    this._super(...arguments);
    this.set('items', [{
      name: 'grapes', price: 1.99, qty: 1
    }]);
  },
  cityTax: 0.07,
  stateTax: 0.02,
  countyTax: 0.12,
  tax: taxSum('cityTax', 'countyTax', 'stateTax'),
  grandTotal: computed('items.@each.{price,qty}', 'tax', function() {
    let total = 0;
    const items = this.get('items');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      total += (item.price * item.qty);
    }
    return (total * (1 + this.get('tax'))).toFixed(2);
  }),
  actions: {
    newReceiptItem(name) {
      const price = 3;
      const qty = 1;
      this.get('items').addObject({ name, price, qty });
      this.set('newItemName', '');
    }
  }
});
