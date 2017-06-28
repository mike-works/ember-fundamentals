import Ember from 'ember';

export default Ember.Component.extend({
    r: '200',
    g: '100',
    b: '100',
 
    hex: Ember.computed('r', 'g', 'b', {
        get() {
            let {r, g, b} = this.getProperties('r', 'g', 'b');
            return [r, g, b]
                .map((cc) => parseInt(cc, 10).toString(16))
                .map((cc) => cc.length < 2 ? `0${cc}` : cc)
                .join('')
        },
        set(_, hexStr) {
            let [r, g, b] = [0, 2, 4]
                .map((offset) => parseInt(hexStr.substring(offset, offset+2), 16).toString());
            this.setProperties({r, g, b});
            return hexStr;
        }
    })
});
