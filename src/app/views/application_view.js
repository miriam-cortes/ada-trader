import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.stockData = options.stockData; //full list of data
    this.stockTemplate = _.template($('#tmpl-quote-view').html());
    this.listElement = this.$('.quotes');
    this.cardList = [];
    this.stockData.forEach(function(stock) {
      var card = new QuoteView({
        stock: stock,
        template: this.stockTemplate
      });
      this.cardList.push(card);
    },this);

    this.input = {
      symbol: this.$('.new-stock input[name="symbol"]'),
      price: this.$('.new-stock input[name="price"]')
    };
  }, //close initialize function

  render: function() {
    this.listElement.empty();
    this.cardList.forEach(function(card) {
      card.render();
      this.listElement.append(card.$el);
    },this);

    return this;
  } //close render



});

export default ApplicationView;
