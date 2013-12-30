App = Ember.Application.create({
  LOG_VIEW_LOOKUPS: true
});
App.setupForTesting();
App.injectTestHelpers();

App.ApplicationController = Ember.Controller.extend({
  date: '12/25/13',

  actions: {
    datepickerSelect: function(args) {
      console.log('select');
      console.log(args);
    },
    datepickerClosed: function(args) {
      console.log('closed');
      console.log(args);
    }
  }
});

