Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<p>Year range should only be 2013 to 2014</p>\n\n<p>Date is: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "date", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n\n");
  hashContexts = {'value': depth0,'yearRange': depth0,'onSelect': depth0,'onClose': depth0};
  hashTypes = {'value': "ID",'yearRange': "STRING",'onSelect': "STRING",'onClose': "STRING"};
  options = {hash:{
    'value': ("date"),
    'yearRange': ("2013:2014"),
    'onSelect': ("datepickerSelect"),
    'onClose': ("datepickerClosed")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['jqui-datepicker'] || (depth0 && depth0['jqui-datepicker'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "jqui-datepicker", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});