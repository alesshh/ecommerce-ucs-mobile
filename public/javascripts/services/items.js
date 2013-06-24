Module("Ecommerce.Service.Items", function(Items) {
  Items.allUrl = "http://ecommerce-ucs.herokuapp.com/items.json?callback=?"
  Items.all = function() {
    return $.getJSON(this.allUrl);
  }

  Items.showUrl = "http://ecommerce-ucs.herokuapp.com/items/:id.json?callback=?"
  Items.get = function(id) {
    return $.getJSON(this.showUrl.replace(":id", id))
  }
}, {})
