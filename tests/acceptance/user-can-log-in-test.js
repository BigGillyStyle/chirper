import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'chirper/tests/helpers/start-app';

module('Acceptance | user can log in', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('User can log in', function(assert) {
  visit('/');
  fillIn('.login-box input[type="text"]', 'andy');
  fillIn('.login-box input[type="password"]', 'andy');
  click('button.login');

  andThen(function() {
    assert.equal(currentRouteName(), 'home');
  });
});

test('Wrong credentials shows error box', function(assert) {
  visit('/');
  fillIn('.login-box input[type="text"]', 'andy');
  fillIn('.login-box input[type="password"]', 'not_the_right_password');
  click('button.login');

  andThen(function() {
    assert.equal(currentRouteName(), 'index');
    assert.ok($('p.error').length !== 0);
  });
});
