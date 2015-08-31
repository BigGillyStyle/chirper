import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  actions: {
    openComposeModal: function() {
      this.get('application').send('toggleComposeModal');
    }
  }
});
