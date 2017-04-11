import { moduleForModel, test } from 'ember-qunit';

moduleForModel('course-stage', 'Unit | Model | course stage', {
  // Specify the other units that are required for this test.
  needs: ['model:course', 'model:course-agenda-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
