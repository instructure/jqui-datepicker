var component, containerView, $el, model, $widget, date, onCloseCalled;
var onSelectCalled;
var run = Ember.run;

function selectDate(){
  run(function(){
    $el.trigger('focus');
    $widget = $el.datepicker('widget');
    var link = $widget.find('td[data-handler=selectDay]').first();
    link.click();
    $el.datepicker('hide');
  });
}

function createComponent(options){
  options = options || {};
  run(function(){
    model = Ember.Object.create({foo: 'bar'});
    containerView = new Em.ContainerView();
    component = DPComponent.create({}, $.extend({
      valueBinding: 'foo',
      foo: 'bar',
      model: model,
      duration: 0,
      container: containerView
    }, options));
    component.append();
    containerView.appendTo('#qunit-fixture');
  });
  $el = component.$();
}

var DPComponent = jqui.DatepickerComponent.extend({
  actions: {
    onClose: function(){
      onCloseCalled = true;
    },
    onSelect: function(dateText){
      onSelectCalled = true;
      date = dateText;
      this._super.apply(this, arguments);
    }
  }
});

module('jqui.DatepickerComponent', {
  setup: function() {
    createComponent();
  },

  teardown: function(){
    run(function(){
      component.destroy();
      containerView.destroy();
    });
  }
});

test('selecting dates in the datepicker changes the bound property', function() {
  selectDate();
  strictEqual(component.get('foo'), date);
});

test("triggers onClose action", function(){
  selectDate();
  strictEqual(onCloseCalled, true);
});

test("triggers onSelect action", function(){
  selectDate();
  strictEqual(onSelectCalled, true);
});

test("passes options to jqui datepicker", function(){
  var i, l, options = jqui.DatepickerComponent.OPTIONS;
  var option;
  var constructorArgs = {};
  for (i = 0, l = options.length; i < l; i++){
    option = options[i];
    constructorArgs[option] = true;
  }

  var oldDatepicker = $.fn.datepicker;
  $.fn.datepicker = function(opts){
    var compareValue = true;
    for (i = 0, l = options.length; i < l; i++){
      option = options[i];
      if(option === 'onSelect' || option === 'onClose') {
        ok(option, 'function passed for ' + option);
        continue;
      }
      equal(opts[option], compareValue, option + ' proxied to $.datepicker');
    }
  };
  createComponent(constructorArgs);
  $.fn.datepicker = oldDatepicker;
});
