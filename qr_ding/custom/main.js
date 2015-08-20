window.commpress ={};
window.commpress.classes = {};
window.commpress.classes.router = Backbone.Router.extend({
routes:{
  "":"homeAction",
  "customer/create":"createCustomerAction"
},
homeAction:function(){
  console.log("Test Home");
},
createCustomerAction:function(){
  var model_data = new window.commpress.classes.model();
  console.log(model_data.get('title'));
  var content = new  window.commpress.classes.view({model: model_data });
  $('#mainContent').html(content.render().$el);
}
});
window.commpress.classes.view = Backbone.View.extend({
  template: null,
  initialize:function(){
    this.template = _.template(
     $( "script.template" ).html()
   );
  },
  render:function(){
   this.$el.append(this.template(
     {
       model:this.model.toJSON()
     }
   )
 );
   return this;
  }
});

window.commpress.classes.model = Backbone.Model.extend({
  defaults:{
    title:'texas',
    body:'Mama mia'
  }
});

var test = new window.commpress.classes.router();
Backbone.history.start();
