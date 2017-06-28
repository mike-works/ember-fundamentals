import Ember from 'ember';
import DS from 'ember-data';

export function fixRecordId(record) {
    if (typeof record.attributes.slug === 'string') {
        record.id = record.attributes.slug;
    }
    return record;
}

export default DS.JSONAPISerializer.extend({
    normalizeResponse(
        store,
        modelClass,
        payload,
        id,
        requestType) {
        
        let normalized = null;
        if (payload.data && Ember.isArray(payload.data)) {
            normalized = {
                jsonapi: { version: '1.0'},
                data: payload.data.map(fixRecordId)
            };
        } else {
            // single record case 
            normalized = {
                jsonapi: { version: '1.0'},
                data: fixRecordId(payload.data)
            };
        }
        return this._super(store, modelClass, normalized, id, requestType);
    }
});
