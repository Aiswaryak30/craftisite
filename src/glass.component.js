(function(){
    'use strict';

    angular.module('craft')
    .component('glassCategories',{
        templateUrl:'/craftisite/src/item.glass.html',
        bindings:{
            glass:'<'
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