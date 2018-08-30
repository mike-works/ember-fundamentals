import DS from 'ember-data';

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  host = 'https://api.mike.works';
  namespace = 'api/v1';
}
