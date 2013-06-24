Module("Ecommerce.Views.Index", function(Index){
  Index.fn.initialize = function() {
    this.template = Handlebars.compile($("#items-source").html());
    this.component = $("#items-block");
    this.registerListeners();
  };

  Index.fn.registerListeners = function() {
    Ecommerce.App.mediator.on("go-items", $.proxy(this.render, this));
    $(document).on("click", ".buy", $.proxy(this.showItem, this));
  }

  Index.fn.showItem = function(event) {
    event.preventDefault();
    this.component.hide();
    Ecommerce.App.mediator.trigger("go-show", $(event.target).data("id"))
  }

  Index.fn.render = function() {
    Ecommerce.Service.Items.all().done($.proxy(this.renderItems, this))
    this.component.show()
  }

  Index.fn.renderItems = function(data) {
    this.component.html(this.template({items: data}));
  }
});
