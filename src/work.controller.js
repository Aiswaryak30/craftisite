(function(){
    'use strict';

    angular.module('craft')
    .controller('WorkAppController',WorkAppController);

    WorkAppController.$inject=['works'];
    function WorkAppController(works){
        var wrk=this;

        wrk.works=works;

    }
})();