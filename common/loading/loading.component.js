(function(){
    'use strict';

    angular.module('common')
    .component('loading',{
        template:'<img src="/craftisite/project/ball1.gif" ng-if="$ctrl.show">',
        controller:LoadingController
    });

    LoadingController.$inject=['$rootScope'];
    function LoadingController($rootScope){
        var $ctrl=this;
        var listener;

        $ctrl.$onInit=function(){
            $ctrl.show=false;
            listener=$rootScope.$on('spinner:activate',onSpinnerActivate);
        };

        $ctrl.$onDestroy=function(){
            listener();
        };

        function onSpinnerActivate(event,data){
            $ctrl.show=data.on;
        }
    }
})();

