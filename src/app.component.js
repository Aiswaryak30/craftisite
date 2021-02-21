(function(){
    'use strict';

    angular.module('craft')
    .component('menuCategories',{
        templateUrl:'/craftisite/src/item.template.html',
        bindings:{
            items:'<'
        }
    });

})();