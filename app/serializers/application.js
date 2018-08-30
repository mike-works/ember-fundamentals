import DS from 'ember-data';
const { JSONAPISerializer } = DS;

export default class ApplicationSerializer extends JSONAPISerializer {
  extractId (modelClass, resourceHash) {
    // for things that have a slug
    return resourceHash.attributes.slug
      || super.extractId(...arguments); // for records without a slug

  }
}
