jqui-datepicker
=============

Ember component that wraps jquery-ui datepicker. By default, binds the `value`
property of the component to the datepicker's value.

Using
------------

After you've included the script with a script tag or your favorite module
system, you can access the class in JavaScript like so (assuming you're using
globals):

```javascript
var MySubclass = jqui.DatepickerComponent.extend({

});
```

`jqui.DatepickerComponent` provides two hooks to override its binding behavior.

You can define an `onSelect` action to stop bindings from happening. You
can also define an `onClose` action to respond when the datepicker is closed.

```javascript

var MySubclassComponent = jqui.DatepickerComponent.extend({
  actions: {
    onClose: function() {
      // Doin' stuff
    },
    onSelect: function(dateText, jqUIElement) {
      // Doin' more stuff
    }
  }
});
```

Contributing
------------

After cloning this repo, install dependencies:

```sh
$ npm install
$ bower install
```

Fire up the grunt watcher:

```sh
$ grunt
```

Then in a different tab run your tests with testem:

```sh
$ testem
```

License & Copyright
-------------------

MIT License

(c) 2013 Instructure, Inc

