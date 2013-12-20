+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember', 'jquery-ui'], function(Ember) {
      return factory(Ember);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('ember'), require('jquery-ui'));
  } else {
    root.jqui = root.jqui || {};
    root.jqui.DatepickerComponent = factory(Ember);
  }
}(this, function(Ember) {

  var options = ["altField", "altFormat", "appendText", "autoSize",
    "beforeShow", "beforeShowDay", "buttonImage", "buttonImageOnly",
    "buttonText", "calculateWeek", "changeMonth", "changeYear", "closeText",
    "constrainInput", "currentText", "dateFormat", "dayNames", "dayNamesMin",
    "dayNamesShort", "defaultDate", "duration", "firstDay", "gotoCurrent",
    "hideIfNoPrevNext", "isRTL", "maxDate", "minDate", "monthNames",
    "monthNamesShort", "navigationAsDateFormat", "nextText", "numberOfMonths",
    "onChangeMonthYear", "onClose", "onSelect", "prevText",
    "selectOtherMonths", "shortYearCutoff", "showAnim", "showButtonPanel",
    "showCurrentAtPos", "showMonthAfterYear", "showOn", "showOptions",
    "showOtherMonths", "showWeek", "stepMonths", "weekHeader", "yearRange",
    "yearSuffix"];

  return Ember.TextField.extend({
    initDatepicker: function() {
      this.$().datepicker(this.getProperties.apply(this, options));
    }.on('didInsertElement'),

    destroyDatepicker: function() {
      this.$().datepicker('destroy');
    }.on('willDestroyElement'),

    method: function(method) {
      return this.$().datepicker(method);
    }
  });

});


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

