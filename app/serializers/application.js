import DS from 'ember-data';

function replaceIdWithSlug(record) {
  let slug = record.attributes.slug;
  record.id = slug;
  return record;
}

export default DS.JSONAPISerializer.extend({
  normalizeResponse (store, modelClass, payload, id, requestType){
    //  Ember.isArray(payload.data)
    let newPayload;
    if (typeof payload.data.indexOf === 'function') {
      // Collection of records
      newPayload = {
        jsonapi: payload.jsonapi,
        data: payload.data.map(replaceIdWithSlug)
      };
    } else {
      // Single record
      newPayload = {
        jsonapi: payload.jsonapi,
        data: replaceIdWithSlug(payload.data)
      };
    }
    return this._super(store, modelClass, newPayload, id, requestType);
  }
});
