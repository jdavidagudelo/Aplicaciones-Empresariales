/**
 * 
 */
(function(){
	var app = angular.module('store', []);
	app.controller("StoreController",function(){
		this.products = phones;
	});
	var phones = [{
			name:'Motorola',
			price: 7.95,
			description : 'Figura',
			canPurchase : true,
			soldOut : false,
			images : ["img/phones/dell-streak-7.0.jpg"],
			
	},{
		name:'Samsung',
		price: 4.95,
		description : 'Figura',
		canPurchase : true,
		soldOut : false,
		images : ["img/phones/dell-streak-7.0.jpg"],
},];
})();