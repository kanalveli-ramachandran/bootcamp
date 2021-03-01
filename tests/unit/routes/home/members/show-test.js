import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/members/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/members/show');
    assert.ok(route);
  });
});
