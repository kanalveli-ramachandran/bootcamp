import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/members/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/members/index');
    assert.ok(route);
  });
});
