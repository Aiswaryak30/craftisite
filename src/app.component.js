(function(){
    'use strict';

    angular.module('craft')
    .component('menuCategories',{
        templateUrl:'/craftisite/src/item.template.html',
        bindings:{
            items:'<'
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