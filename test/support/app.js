App = Ember.Application.create({
  LOG_VIEW_LOOKUPS: true
});
App.setupForTesting();
App.injectTestHelpers();

App.ApplicationController = Ember.Controller.extend({
  date: '12/25/13'
});

