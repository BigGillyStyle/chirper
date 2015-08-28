import Ember from 'ember';
import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  aboutMe: DS.attr('string'),
  joinedAt: DS.attr('date'),

  followees: DS.hasMany('user', {
    async: true,
    inverse: 'followers'
   }),
  followers: DS.hasMany('user', {
    async: true,
    inverse: 'followees'
  }),
  numberOfFollowing: Ember.computed('followees', function() {
    return this.get('followees').get('length');
  }),
  numberOfFollowers: Ember.computed('followers', function() {
    return this.get('followers').get('length');
  }),

  chirps: DS.hasMany('chirp', { async: true }),
  numberOfChirps: Ember.computed('chirps', function() {
    return this.get('chirps').get('length');
  })
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      username: 't4t5',
      aboutMe: 'I like making stuff.',
      joinedAt: new Date('2015-06-08T09:30:26'),
      followees: [1],
      followers: [1],
      chirps: [1, 2, 3]
    }
  ]
});

export default User;
