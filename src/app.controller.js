(function(){
    'use strict';

    angular.module('craft')
    .controller('CraftAppController',CraftAppController);
    
    CraftAppController.$inject=['items'];
    function CraftAppController(items){
        var mini=this;

        mini.items=items;

  

    
}  

})();

// row justify-content-md-center