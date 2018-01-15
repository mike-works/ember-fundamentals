import DS from 'ember-data';

export default class AppAdapter extends DS.JSONAPIAdapter {
  host = 'https://api.mike.works';
  namespace = 'api/v1';

  urlForFindRecord(id: string, modelName: string, snapshot: DS.Snapshot): string {
    switch(modelName) {
      case 'course-stage':
        let [courseId, stageId] = id.split(';');
        return `${super.urlForFindRecord(courseId, 'course', snapshot)}/stages/${stageId}`;
      default:
        return super.urlForFindRecord(id, modelName, snapshot);
    }
  }
}
