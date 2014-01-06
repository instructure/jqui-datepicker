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

  var EVENTS = ['onClose', 'onSelect'];

  function sendAction(context, actionName) {
    return function(){
      var args = [].slice.call(arguments);
      context.send.apply(context, [actionName].concat(args));
    };
  }


  var DatepickerComponent = Ember.TextField.extend({
    initDatepicker: function() {
      var properties = this.getProperties.apply(this, options);
      this.proxyDatepickerEvents(properties);
      this.$().datepicker(properties);
    }.on('didInsertElement'),

    proxyDatepickerEvents: function(properties) {
      var component = this;
      var event;
      for (var i = 0, l = EVENTS.length; i < l; i++) {
        event = EVENTS[i];
        properties[event] = sendAction(component, event);
      }
    },

    actions: {
      onSelect: function(){
        this._elementValueDidChange();
      },
      onClose: Ember.K
    },

    destroyDatepicker: function() {
      this.method('destroy');
    }.on('willDestroyElement'),

    method: function(method) {
      return this.$().datepicker(method);
    }
  });

  DatepickerComponent.reopenClass({
    OPTIONS: options
  });

  return DatepickerComponent;
});

