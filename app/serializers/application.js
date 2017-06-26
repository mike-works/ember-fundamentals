import Ember from 'ember';
import DS from 'ember-data';

function massageRecord(record) {
    if (record.attributes.slug) {
        record.id = record.attributes.slug;
    }
    return record;
}

export default DS.JSONAPISerializer.extend({
  normalizeResponse (store, modelClass, payload, id, requestType){
    if (Ember.isArray(payload.data)) {
        payload.data = payload.data
            .map(massageRecord);
    } else {
        payload.data = massageRecord(payload.data)
    }
    return this._super(store, modelClass, payload, id, requestType);
  }
});
