(function(){
    'use strict';

    angular.module('craft')
    .service('MiniDataService',MiniDataService);

    function MiniDataService(){
        var service=this;
        var miniatures=[
            {
                Name:'Pista cake',
                Description:"A greeny pista cake is right here,which looks real enough to gorge on!!",
                Image:'/project/pista.jpg',
                Price: 200
            },
            {
                Name:'Cookies',
                Description:"Here is a handmade magnet of the yummy cookies topped with choco chips!!",
                Image:'/project/cookies.jpg',
                Price: 150
            },
            {
                Name:'Donut',
                Description:"Here is a handmade magnet of cute multi flavoured donuts placed on pan!!",
                Image:'/project/donut.jpg',
                Price: 250
            },
        
            {
                Name:'Dosa',
                Description:"Here is a handmade miniature dosa for all the dosa lovers out there!!",
                Image:'/project/dosa.jpg',
                Price: 100
            },
       
            {
                Name:'Noodles',
                Description:"Here is a handmade magnet of the yummy maggie noodles creation. ",
                Image:'/project/noodles.jpg',
                Price: 150
            },
          
            {
                Name:'Chocolate cake with cherries',
                Description:"Here is a miniature of cute chocolate cake grated with chocolate slices!!",
                Image:'/project/chcake.jpg',
                Price: 200
            },
            {
                Name:'Donut',
                Description:"Here is a handmade magnet of cute multi flavoured donuts!!",
                Image:'/project/donut1.jpg',
                Price: 200
            },
            {
                Name:'Parotta',
                Description:"Here we present you the tasty Madurai parotta and salna!!",
                Image:'/project/parotta.jpg',
                Price: 100
            },
            {
                Name:'Strawberry cake',
                Description:"Strawberry cake with cherry on top and a sliced piece is right here!!",
                Image:'/project/strawberry.jpg',
                Price: 150
            },
           
            {
                Name:'chocolates',
                Description:"Here is a handmade miniatures of milk and dark chocolates!!",
                Image:'/project/chocolate.jpg',
                Price: 150
            },
            {
                Name:'Mini Sofa',
                Description:"Here is a cute miniature red sofa with 2 cushions!!",
                Image:'/project/sofa.jpg',
                Price: 150
            },
            {
                Name:'Chocolate cake',
                Description:"Here is a handmade magnet of the yummy chocolate creation. Indeed a yummy treat for your eyes!!",
                Image:'/project/cake.jpg',
                Price: 150
            },
            {
                Name:'Strawberry cake',
                Description:"Strawberry cake with cherry on top and a sliced piece is right here!!",
                Image:'/project/strawberry1.jpg',
                Price: 150
            }
        ];
        var gift=[
            {
                Name:'Magic Pikachu',
                Description:"Give colour to your Pikachus!!",
                Image:'/artcraft/magicpika.jpg',
                Price: 300
            },
            
            {
                Name:'Unlimited Folds',
                Description:"Valentines day special!!",
                Image:'/artcraft/folds.jpg',
                Price: 75
            },
         
            {
                Name:'Slider Heart',
                Description:"Join your heart",
                Image:'/artcraft/heart.jpg',
                Price: 80
            },
            {
                Name:'Smiley Quote',
                Description:"Smiley with quote inside!!",
                Image:'/artcraft/cool.jpg',
                Price: 50
            },
            {
                Name:'Smiley Quote',
                Description:"Awesome smiley with cute quote inside!!",
                Image:'/artcraft/kissy.jpg',
                Price: 50
            },
            {
                Name:'Wedding Greeting',
                Description:"Gift the newly married couple with this creation",
                Image:'/artcraft/greetings.jpg',
                Price: 350
            },
            {
                Name:'Pen Stand',
                Description:"Make your things organized!!",
                Image:'/artcraft/penstand.jpg',
                Price: 150
            },
            {
                Name:'Secret Card',
                Description:"Hide some secrtet message inside!!",
                Image:'/artcraft/secret_card.jpg',
                Price: 50
            },
            {
                Name:'Slider Pikachu',
                Description:"Twist the pikachu!!",
                Image:'/artcraft/slider.jpg',
                Price: 50
            },
            {
                Name:'Cake Box',
                Description:"A cute cake box with images of your loved ones!!",
                Image:'/artcraft/cakebox.jpg',
                Price: 300
            },
        ];
var glasspaint=[    
    {
        Name:'Peacock',
        Image:'/artcraft/peacock1.jpg',
        Price: 50
    },
    {
        Name:'Butterfly',
        Image:'/artcraft/buttergp.jpg',
        Price: 50
    },
    {
        Name:'Angel',
        Image:'/artcraft/angel.jpg',
        Price: 50
    },
    {
        Name:'Birds',
        Image:'/artcraft/birdgp.jpg',
        Price: 50
    },
    {
        Name:'Flowers',
        Image:'/artcraft/flowergp.jpg',
        Price: 50
    },
    {
        Name:'Peacock',
        Image:'/artcraft/peacockgp.jpg',
        Price: 50
    },
    {
        Name:'Butterfly',
        Image:'/artcraft/butterflygp.jpg',
        Price: 50
    }
 
];
var origamis=[
    {
        Name:'Butterfly',
        Image:'/artcraft/butterflies.jpg'

    },
    {
        Name:'Cube Rose',
        Image:'/artcraft/cuberose.jpg'

    },
    {
        Name:'Butterfly',
        Image:'/artcraft/butter.jpg'

    },
    {
        Name:'Butterfly',
        Image:'/artcraft/butterfly1.jpg'

    },
    {
        Name:'Pikachu',
        Image:'/artcraft/pikachu.jpg'

    }
];

var vdos=[
    {
        Name:'Happy Birthday Mom',
        Image:'/artcraft/greetings.mp4'
    },
    {
        Name:'Magic Pikachu',
        Image:'/artcraft/pikachu.mp4'
    },
    {
        Name:'Secret Message Card',
        Image:'/artcraft/secret.mp4'
    },
    {
        Name:'Slider Heart',
        Image:'/artcraft/dragheart.mp4'
    },
    {
        Name:'Waterfall Card',
        Image:'/artcraft/waterfall.mp4'
    },
    {
        Name:'Slider',
        Image:'/artcraft/slide.mp4'
    },
    {
        Name:'Magic Heart',
        Image:'/artcraft/magicheart.mp4'
    },
    {
        Name:'Fold Cubes',
        Image:'/artcraft/foldcubes.mp4'
    },
    {
        Name:'Flowers',
        Image:'/artcraft/flower.mp4'
    },
    {
        Name:'Mini Gift',
        Image:'/artcraft/card.mp4'
    },
    {
        Name:'Cake Greetings',
        Image:'/artcraft/cake.mp4'
    },
    {
        Name:'Mini Birthday Card',
        Image:'/artcraft/bday.mp4'
    }
    
];

var works=[
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wpista.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wchocolate.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wdosa.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wgreet.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wkissy.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wpeacock.jpeg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wpeacock.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wpiece.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wpista1.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wrose.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wsmiley.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wstraw.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wstrawberry.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/project/wsweet.jpg'
    },
]
service.getAllCategories=function(){
    return miniatures;
}
service.getAllGifts=function(){
    
    return gift;
}

service.getAllGlassPaints=function(){
return glasspaint;
}
service.getAllOrigamis=function(){
    return origamis;
}
service.getAllVideos=function(){
    return vdos;
}
service.getAllWorks=function(){
    return works;
}


}


   
})();