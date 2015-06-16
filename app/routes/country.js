import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://restcountries.eu/rest/v1/name/' + params.countryname;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var countries = [];
      responseJSON.forEach(function(country) {
        countries.push(country);
      });
      return countries;
    });
  }
});
