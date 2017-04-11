import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return fetch('https://api.mike.works/api/v1/courses')
      .then((response) => response.json())
      .then((jsonData) => {
        return jsonData.data.map((raw) => {
          let { title, summary, slug } = raw.attributes;
          let imageInfo = raw.attributes['image-info'];
          return {
            title, summary, slug,
            'image-info': imageInfo
          };
        });
      });
  }
});
