// import $ from 'jquery';
// import Backbone from 'backbone';
// import _ from 'underscore';
//
// import StockView from 'app/views/quote_view';
//
// var StockListView = Backbone.View.extend({
//   initialize: function(options) {
//     this.stockData = options.stockData;
//
//     this.StockTemplate = _.template($('#tmpl-quote-view').html());
//
//     this.listElement = this.$('.quotes');
//
//     this.cardList = [];
//     this.stockData.forEach(function(stock) {
//       var card = new StockView({
//         stock: stock,
//         template: this.stockTemplate
//       });
//       this.cardList.push(card);
//     }, this);
//
//     this.input = {};
//   },
//
//   render: function() {
//     this.listElement.empty();
//     this.cardList.forEach(function(card) {
//       card.render();
//       this.listElement.append(card.$el);
//     }, this);
//
//     return this;
//   } //close render
// });
//
// export default StockListView;
