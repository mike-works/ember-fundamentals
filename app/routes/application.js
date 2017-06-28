import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
    model() {
        return fetch('https://api.mike.works/api/v1/courses')
            .then((resp) => resp.json())
            .then((jsonData) => {
                let rawArray = jsonData.data;
                return rawArray.map((course) => {
                    return course.attributes;
                });
            });
    }
});
