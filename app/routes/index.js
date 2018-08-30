import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    return await this.store.findAll('course');
  }
});
