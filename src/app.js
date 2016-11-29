import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import ApplicationView from 'app/views/application_view';

const simulate = function(quote) {
  // Calculate a random price movement
  const maxChange = 1.00;
  const minChange = 0.00;
  var change = _.random(minChange * 10, maxChange * 10) / 10;

  // Decide if the change is positive or negative
  if(_.random(0,1) === 1) {
    change *= -1;
  }

  // Actually trigger the change
  quote.trigger('change:price', change);
};

var stockData = [
  {stock: "Cristal's HumorUs",symbol: "HUMOR",price: 88.50},
  {stock: "Sophia's Cloth Sim",symbol: "CLOTH",price: 81.70},
  {stock: "Val's Habitmon",symbol: "HABIT",price: 98.00},
  {stock: "Rowan's Super Hero Draft",symbol: "SUPER", price: 83.10 },
  {stock: "Nicole's Ingredient Inspector",symbol: "INGRD",price: 79.40},
  {stock: "Jess's Digital Mixtape",symbol: "MXTPE",price: 109.20},
  {stock: "Leah's Centaur",symbol: "CNTAR", price: 90.70},
  {stock: "Lisa's Evolution In Color",symbol: "EVCLR", price: 101.90},
  {stock: "Jade's Fuzz Therapy",symbol: "FUZZY", price: 88.60}
]

$(document).ready(function() {
  var application = new ApplicationView({
    el: $('#application'),
    stockData: stockData
  });
  application.render();

  setInterval(function() {
    // Call simulate() on each quote in the ApplicationView
  }, 1000);
});

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
