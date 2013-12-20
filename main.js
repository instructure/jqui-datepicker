+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember', './lib/components/jqui-datepicker'], function(Ember, UiDatepicker) {
      return factory(Ember, UiDatepicker);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('ember'), require('./lib/components/jqui-datepicker'));
  } else {
    factory(Ember, jqui.DatepickerComponent);
  }
}(this, function(Ember, UiDatepicker) {

  Ember.Application.initializer({
    name: 'jqui-datepicker',
    initialize: function(container, application) {
      container.register('component:jqui-datepicker', UiDatepicker);
    }
  });

  return {
    UiDatepicker: UiDatepicker
  };

});

