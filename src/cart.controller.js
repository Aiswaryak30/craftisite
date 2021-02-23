
(function(){
    'use strict';

    angular.module('craft')
    .controller('CartAppController',CartAppController);

    CartAppController.$inject=['MiniDataService'];
    function CartAppController(MiniDataService){
        var cart=this;
        cart.cartitem=MiniDataService.getItem();
        cart.getPrice=MiniDataService.getPrice();
        
        cart.removeItem=function(itemindex){
            MiniDataService.removeItem(itemindex);
  
        }
       
        
    }
})();