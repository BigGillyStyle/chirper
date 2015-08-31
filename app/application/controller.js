import Ember from 'ember';

export default Ember.Controller.extend({
  appName: "Chirper",
  showAppName: true,

  actions: {
    toggleComposeModal: function() {
      this.set('showingComposeModal', !this.get('showingComposeModal'));
    }
  }
});
