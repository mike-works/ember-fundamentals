import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.mike.works',
  namespace: 'api/v1' 
});
