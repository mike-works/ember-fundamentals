import DS from 'ember-data';

export function normRecord(apiPayload): any {
  return Object.assign(apiPayload, {
    id: apiPayload.attributes.slug
  });
}

export function normPayload(payload) {
  let normalized = payload;
  if (payload.data instanceof Array) {
    normalized = {
      jsonapi: payload.jsonapi,
      data: payload.data.map(normRecord)
    };
  } else {
    normalized = {
      jsonapi: payload.jsonapi,
      data: normRecord(payload.data)
    };
  }
  return normalized;
}

export default class AppSerializer extends DS.JSONAPISerializer {
  public normalizeResponse(
    store: DS.Store,
    primaryModelClass: DS.Model,
    payload: { data: any | any[]; jsonapi?: any },
    id: string | number,
    requestType: string
  ): any {
    return super.normalizeResponse(
      store,
      primaryModelClass,
      normPayload(payload),
      id,
      requestType
    );
  }
}
