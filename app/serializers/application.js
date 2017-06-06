import Ember from 'ember';
import DS from 'ember-data';

function normalizeRecord(record) {
    if (record.attributes.slug) {
        record.id = record.attributes.slug;
    }
    return record;
}

export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if (payload.data && Ember.isArray(payload.data)) {
            // Collection of courses
            payload.data = payload.data.map((r) => normalizeRecord(r));
        } else if (payload.data && typeof payload.data === 'object') {
            // Single course
            payload.data = normalizeRecord(payload.data);
        }
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
