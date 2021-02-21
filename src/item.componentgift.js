(function(){
    'use strict';

    angular.module('craft')
    .component('giftCategories',{
        templateUrl:'/craftisite/src/item.gift.html',
        bindings:{
            gifts:'<'
        }
    })
})();