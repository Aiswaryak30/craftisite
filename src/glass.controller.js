(function(){
    'use strict';

    angular.module('craft')
    .controller('GlassPaintAppController',GlassPaintAppController);

    GlassPaintAppController.$inject=['glass'];
    function GlassPaintAppController(glass){
        var paint=this;

        paint.glass=glass;

    }
})();