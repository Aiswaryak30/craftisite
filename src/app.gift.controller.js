(function(){
    'use strict';

    angular.module('craft')
    .controller('CustamisedAppController',CustamisedAppController);

    CustamisedAppController.$inject=['gifts'];
    function CustamisedAppController(gifts){
        var custamised=this;

        custamised.gifts=gifts;

    }
})();