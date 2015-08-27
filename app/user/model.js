import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  numberOfChirps: DS.attr('number'),
  numberOfFollowing: DS.attr('number'),
  numberOfFollowers: DS.attr('number')
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      username: 't4t5',
      numberOfChirps: 2,
      numberOfFollowing: 5,
      numberOfFollowers: 5
    }
  ]
});

export default User;