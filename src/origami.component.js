(function(){
    'use strict';

    angular.module('craft')
    .component('origamiCategories',{
        templateUrl:'/src/item.origami.html',
        bindings:{
            origami:'<'
        }
    })
})();