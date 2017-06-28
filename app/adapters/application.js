import DS from 'ember-data';
import config from '../config/environment';

const { host, namespace } = config.API;

export default DS.JSONAPIAdapter.extend({
    host,
    namespace
});
