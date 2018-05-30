import DS from 'ember-data';

function replaceIdWithSlug(raw) {
  if (typeof raw.attributes.slug === 'undefined')
    return raw;
  return Object.assign(raw, { id: raw.attributes.slug, oldId: raw.id });
}

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, modelClass, payload, id, requestType) {
    let normalizedPayload = {};
    if (typeof payload.data.reduce === 'function') {
      // collection
      normalizedPayload.data = payload.data.map(replaceIdWithSlug);
    } else {
      // single
      normalizedPayload.data = replaceIdWithSlug(payload.data);
    }
    return this._super(store, modelClass, normalizedPayload, id, requestType);
  }
});
