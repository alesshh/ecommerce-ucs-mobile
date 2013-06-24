Module("Ecommerce.Views.Show", function(Show){
  Show.fn.initialize = function() {
    this.template = Handlebars.compile($("#item-source").html());
    this.component = $("#item-block");
    this.registerListeners();
  };

  Show.fn.registerListeners = function() {
    Ecommerce.App.mediator.on("go-show", $.proxy(this.render, this));
    $(document).on("click", ".back", $.proxy(this.showList, this));
  }

  Show.fn.showList = function(e) {
    e.preventDefault();
    this.component.hide();
    Ecommerce.App.mediator.trigger("go-items");
  }

  Show.fn.render = function(id) {
    Ecommerce.Service.Items.get(id).done($.proxy(this.renderItems, this))
  }

  Show.fn.renderItems = function(data) {
    this.component.show()
    this.component.html(this.template(data));
  }
});
