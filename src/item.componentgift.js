(function(){
    'use strict';

    angular.module('craft')
    .component('giftCategories',{
        templateUrl:'/craftisite/src/item.gift.html',
        bindings:{
            gifts:'<'
        },
        controller:AddToCartController
    });

    AddToCartController.$inject=['MiniDataService'];
    function AddToCartController(MiniDataService){
        var $ctrl=this;

        $ctrl.addItem=function(item){
            
            MiniDataService.addItem(item);
        }
        
    }
    
})();