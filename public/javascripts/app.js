Module("Ecommerce.App", function(App){
  App.mediator = new Mediator;

  App.before = function() {
    this.indexView = new Ecommerce.Views.Index;
    this.showView = new Ecommerce.Views.Show;

    Handlebars.registerHelper('formatCurrency', function(value) {
      return "$" + Number(value).toFixed(2)
    });
  }

  App.start = function() {
    this.before();
    this.mediator.trigger("go-items");
  };

}, {});


$(function(){
  Ecommerce.App.start();
});
