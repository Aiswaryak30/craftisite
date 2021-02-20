(function(){
    'use strict';

    angular.module('craft')
    .config(RoutesConfig);

    RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
        
        .state('home',{
            url:'/',
            views:{
                "":{
                    templateUrl:'/src/home.html'
                },
                "works@home":{
                    templateUrl:'/src/works.html',
                    controller:'WorkAppController as wrk',
                    resolve:{
                        works:['MiniDataService',function(MiniDataService){
                            return MiniDataService.getAllWorks();
                        }]
                    }
                }
            }
        })
        .state('miniatures',{
            url:'/miniatures',
            templateUrl:'/src/miniatures.html',
            controller:'CraftAppController as craft',
            resolve:{
                items:['MiniDataService',function(MiniDataService){
                    return MiniDataService.getAllCategories();
                }]
               
            }
        })
        .state('custamised_gifts',{
            url:'/custamised_gifts',
            templateUrl:'/src/custamised_gifts.html',
            controller:'CustamisedAppController as custamised',
            resolve:{
                gifts:['MiniDataService',function(MiniDataService){
                    return MiniDataService.getAllGifts();
                }]
            }
        })
        .state('glass_painting',{
            url:'/glass_painting',
            templateUrl:'/src/glass_painting.html',
            controller:'GlassPaintAppController as paint',
            resolve:{
                glass:['MiniDataService',function(MiniDataService){
                    return MiniDataService.getAllGlassPaints();
                }]
            }
        })
        .state('origami',{
            url:'/origami',
            templateUrl:'/src/origami.html',
            controller:'OrigamiAppController as org',
            resolve:{
                origami:['MiniDataService',function(MiniDataService){
                    return MiniDataService.getAllOrigamis();
                }]
            }
        })
        .state('custamised_gifts.videos',{
            url:'/custamised_gifts/videos',
            templateUrl:'/src/videos.html',
            controller:'VideoAppController as vdo',
            resolve:{
                videos:['MiniDataService',function(MiniDataService){
                    return MiniDataService.getAllVideos();
                }]
            }
        })
        .state('cart',{
            url:'/cart',
            templateUrl:'/src/cart.html'
            // controller:'CartAppController as cart',
            // resolve:{
            //     cartitem:['MiniDataService',function(MiniDataService){
            //         return MiniDataService.getItems();
            //     }]
            // }
        })
        .state('register',{
            url:'/register',
            templateUrl:'/src/register.html'
            // controller:'OrigamiAppController as org',
            // resolve:{
            //     origami:['MiniDataService',function(MiniDataService){
            //         return MiniDataService.getAllOrigamis();
            //     }]
            // }
        })
        .state('sign_in',{
            url:'/sign_in',
            templateUrl:'/src/sign_in.html'
            // controller:'OrigamiAppController as org',
            // resolve:{
            //     origami:['MiniDataService',function(MiniDataService){
            //         return MiniDataService.getAllOrigamis();
            //     }]
            // }
        })
        .state('workshop',{
            url:'/workshop',
            templateUrl:'/src/workshop.html'
            
        });
  

   
        // .state('submit',{
        //     url:'/submit/{categoryShortName}',
        //     templateUrl:'/src/templates/signin.html',
        //     controller:'menuItemController as menu',
         
           
        // })

    }
})();