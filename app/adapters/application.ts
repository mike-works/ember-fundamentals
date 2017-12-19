import DS from 'ember-data';

export default class AppAdapter extends DS.JSONAPIAdapter {
  host = 'https://api.mike.works';
  namespace = 'api/v1';
}
