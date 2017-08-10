import DS from 'ember-data';

function replaceIdWithSlug(record) {
  if (record.attributes.slug) {
    record.id = record.attributes.slug;
  }
  return record;
}

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, modelClass, payload, id, requestType) {
    let newPayload = {};
    if (id === null) {
      //collection
      newPayload.data = payload.data.map(replaceIdWithSlug)
    } else {
      // single resource
      newPayload.data = replaceIdWithSlug(payload.data);
    }
    return this._super(store, modelClass, newPayload, id, requestType);
  }
});
