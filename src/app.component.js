(function(){
    'use strict';

    angular.module('craft')
    .component('menuCategories',{
        templateUrl:'/src/item.template.html',
        bindings:{
            items:'<'
        }
    });

})();