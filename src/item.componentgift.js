(function(){
    'use strict';

    angular.module('craft')
    .component('giftCategories',{
        templateUrl:'/src/item.gift.html',
        bindings:{
            gifts:'<'
        }
    })
})();