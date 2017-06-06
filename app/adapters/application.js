import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api.mike.works',
    namespace: 'api/v1',

    urlForQueryRecord (query , modelName) {
        let {courseId, stage} = query;
        switch(modelName) {
            case 'course-stage':
                delete query.courseId;
                delete query.stage;
                return `${this.urlForFindRecord(courseId, 'course')}/stages/${stage}`;
            default:
                return this._super(...arguments);
        }
    }
});
