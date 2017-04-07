import Ember from 'ember';
import DS from 'ember-data';

export function mapSlugToId(obj) {
    obj.id = obj.attributes.slug;
    return obj;
}

export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, modelClass, payload) {
        switch (modelClass.modelName) {
            case 'course':
                if (Ember.typeOf(payload.data) === 'array') {
                    payload.data = payload.data.map(mapSlugToId);
                } else {
                    // object type
                    payload.data = mapSlugToId(payload.data);
                }
                return this._super(...arguments);
            default:
                return this._super(...arguments);
        }
    }
});
