/**
 * 
 */
(function(){
	var app = angular.module('store', []);
	app.controller("StoreController",function(){
		this.products = phones;
	});
	app.controller("PanelController", function(){
		this.tab=1;
		this.selectTab = function(setTab)
		{
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab===checkTab;
		};
	});
	var phones = [{
			name:'Motorola',
			price: 7.95,
			description : 'Figura',
			canPurchase : true,
			soldOut : false,
			images : ["img/phones/dell-streak-7.0.jpg","img/phones/dell-venue.3.jpg"],
			
	},{
		name:'Samsung',
		price: 4.95,
		description : 'Figura',
		canPurchase : true,
		soldOut : false,
		images : ["img/phones/dell-streak-7.0.jpg"],
},];
})();