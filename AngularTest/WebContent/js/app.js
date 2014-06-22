/**
 * 
 */
(function(){
	var app = angular.module('store', []);
	app.controller("StoreController",function(){
		this.products = gems;
	});
	var gems = [{
			name:'Dodecahedron',
			price: 2.95,
			description : 'Figura',
			canPurchase : true,
			soldOut : false,
	},];
})();