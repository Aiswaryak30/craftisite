
(function(){
    'use strict';

    angular.module('craft')
    .controller('OrigamiAppController',OrigamiAppController);

    OrigamiAppController.$inject=['origami'];
    function OrigamiAppController(origami){
        var org=this;

        org.origami=origami;

    }
})();