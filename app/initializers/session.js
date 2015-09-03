import Ember from 'ember';
import Session from "simple-auth/session";

export function initialize(container) {
  Session.reopen({
    setCurrentUser: function() {
      var accessToken = this.get('secure.access_token');

      if (!Ember.isEmpty(accessToken)) {
        container.lookup('store:main').query('user', { me: true}).then((array) => {
          var user = array.get('firstObject');
          this.set('content.currentUser', user);
        }, (err) => {
          console.log(err);
        });
      }
    }.observes('secure.access_token')
  });
}

export default {
  name: 'session',
  initialize: initialize,
  before: 'simple-auth'
};
