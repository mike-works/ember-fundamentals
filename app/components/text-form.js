import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('data', {
      firstName: 'Mike',
      lastName: 'North',
      company: 'LinkedIn',
      errors: []
    });
  },
  actions: {
    saveForm() {
      console.log('saving', this.get('data'));
      setTimeout(() => {
        this.get('data.errors').addObject('Name is already used');
      }, 2000);
    }
  }
});
