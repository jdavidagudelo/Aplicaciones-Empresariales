/**
 * 
 */
(function() {
	var app = angular.module('store', []);
	app.controller("StoreController", function() {
		this.products = phones;
	});
	app.controller("PanelController", function() {
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(product)
		{
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	app.directive('productTitle', function(){
		return {
			 restrict: 'E',
			templateUrl: "product-title.html"
		};
	});
	var phones = [
			{
				name : 'Motorola',
				price : 7.95,
				description : 'Figura',
				canPurchase : true,
				soldOut : false,
				images : [ "img/phones/dell-streak-7.0.jpg",
						"img/phones/dell-venue.3.jpg" ],
				reviews : [ {
					stars : 5,
					body : "buen producto",
					author : "productowner@gmail.com"
				}, {
					stars : 4,
					body : "buen producto",
					author : "productowner@gmail.com"
				}, ],

			}, {
				name : 'Samsung',
				price : 4.95,
				description : 'Figura',
				canPurchase : true,
				soldOut : false,
				images : [ "img/phones/dell-streak-7.0.jpg" ],
				reviews : [ {
					stars : 5,
					body : "buen producto",
					author : "productowner@gmail.com"
				}, {
					stars : 4,
					body : "buen producto",
					author : "productowner@gmail.com"
				}, ],
			}, ];
})();