import Ember from 'ember';

export default Ember.Component.extend({
    r: 100,
    g: 100,
    b: 200,
    hex: Ember.computed('r', 'g', 'b', {
        get() {
            let { r, g, b} = this.getProperties('r', 'g', 'b');
            return [r, g, b]
                .map((ch) => parseInt(ch, 10).toString(16))
                .map((ch) => ch.length < 2 ? `0${ch}` : ch)
                .join('');
        },
        set(_, newVal) {
            let [r, g, b] = [0, 2, 4]
                .map((offset) => newVal.substring(offset, offset+2))
                .map((hexCh) => parseInt(hexCh, 16));
            this.setProperties({
                r, g, b
            });
            return newVal;
        }
    }),
    _boxStyle: Ember.computed('r', 'g', 'b', function() {
        let { r, g, b} = this.getProperties('r', 'g', 'b');
        let x = 'width: 100px; height: 100px;';
        return `${x}background: rgb(${r}, ${g}, ${b});`.htmlSafe();
    })
});

