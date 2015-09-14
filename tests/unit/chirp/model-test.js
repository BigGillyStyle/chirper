import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('chirp', 'Unit | Model | chirp', {
  // Specify the other units that are required for this test.
  needs: ['model.user']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('user relationship', function() {
  var Chirp = this.store().modelFor('chirp');

  var relationship = Ember.get(Chirp, 'relationshipsByName').get('user');

  equal(relationship.key, 'user');
  equal(relationship.kind, 'belongsTo');
});
