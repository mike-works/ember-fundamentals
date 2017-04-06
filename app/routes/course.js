import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
    model({ idd }) {
        return fetch(`https://api.mike.works/api/v1/courses/${idd}`)
            .then((response) => response.json())
            .then((jsonData) => {
                return {
                    id: jsonData.data.id,
                    title: jsonData.data.attributes.title
                };
            });
    }
});
