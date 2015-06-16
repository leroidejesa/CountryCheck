import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    population: function() {
      this.transitionToRoute('country', this.get('countryname'));
    }
  }
});
