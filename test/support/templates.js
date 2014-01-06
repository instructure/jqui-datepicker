Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<p>Year range should only be 2013 to 2014</p>\n\n<p>Date is: ");
  stack1 = helpers._triageMustache.call(depth0, "date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n");
  data.buffer.push(escapeExpression((helper = helpers['jqui-datepicker'] || (depth0 && depth0['jqui-datepicker']),options={hash:{
    'value': ("date"),
    'yearRange': ("2013:2014"),
    'onSelect': ("datepickerSelect"),
    'onClose': ("datepickerClosed")
  },hashTypes:{'value': "ID",'yearRange': "STRING",'onSelect': "STRING",'onClose': "STRING"},hashContexts:{'value': depth0,'yearRange': depth0,'onSelect': depth0,'onClose': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "jqui-datepicker", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});