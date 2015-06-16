import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    general: function() {
      this.transitionToRoute('country', this.get('countryname'));
    }
  }
});
