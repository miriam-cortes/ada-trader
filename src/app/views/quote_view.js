var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.stock = options.stock;
    this.template = options.template;
  }, //close initialize

  events: {
    'click .btn-buy': 'buyStock',
    'click .btn-sell': 'sellStock',
    // 'simulate': 'setInterval'
  }, //close events

  buyStock: function(event) {
    event.preventDefault();
    this.stock.price += 1
    // this.simulate();
    this.render();
  }, //close buyStock

  sellStock: function(event) {
    event.preventDefault();
    this.stock.price -= 1
    this.render();
  },//close sellStock

  render: function() {
    var html = this.template({stock: this.stock})
    this.$el.html(html);

    // Enable chained calls
    return this;
  }//close render
});

export default QuoteView;
