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
                Image:'/craftisite/project/pista.jpg',
                Price: 200,
                Quantity:1
            },
            {
                Name:'Cookies',
                Description:"Here is a handmade magnet of the yummy cookies topped with choco chips!!",
                Image:'/craftisite/project/cookies.jpg',
                Price: 150,
                Quantity:1
            },
            {
                Name:'Donut',
                Description:"Here is a handmade magnet of cute multi flavoured donuts placed on pan!!",
                Image:'/craftisite/project/donut.jpg',
                Price: 250,
                Quantity:1
            },
        
            {
                Name:'Dosa',
                Description:"Here is a handmade miniature dosa for all the dosa lovers out there!!",
                Image:'/craftisite/project/dosa.jpg',
                Price: 100,
                Quantity:1
            },
       
            {
                Name:'Noodles',
                Description:"Here is a handmade magnet of the yummy maggie noodles creation. ",
                Image:'/craftisite/project/noodles.jpg',
                Price: 150,
                Quantity:1
            },
          
            {
                Name:'Chocolate cherries cake ',
                Description:"Here is a miniature of cute chocolate cake grated with chocolate slices!!",
                Image:'/craftisite/project/chcake.jpg',
                Price: 200,
                Quantity:1
            },
            {
                Name:'Donut',
                Description:"Here is a handmade magnet of cute multi flavoured donuts!!",
                Image:'/craftisite/project/donut1.jpg',
                Price: 200,
                Quantity:1
            },
            {
                Name:'Parotta',
                Description:"Here we present you the tasty Madurai parotta and salna!!",
                Image:'/craftisite/project/parotta.jpg',
                Price: 100,
                Quantity:1
            },
            {
                Name:'Strawberry cake',
                Description:"Strawberry cake with cherry on top and a sliced piece is right here!!",
                Image:'/craftisite/project/strawberry.jpg',
                Price: 150,
                Quantity:1
            },
           
            {
                Name:'chocolates',
                Description:"Here is a handmade miniatures of milk and dark chocolates!!",
                Image:'/craftisite/project/chocolate.jpg',
                Price: 150,
                Quantity:1
            },
            {
                Name:'Mini Sofa',
                Description:"Here is a cute miniature red sofa with 2 cushions!!",
                Image:'/craftisite/project/sofa.jpg',
                Price: 150,
                Quantity:1
            },
            {
                Name:'Chocolate cake',
                Description:"Here is a handmade magnet of the yummy chocolate creation!!",
                Image:'/craftisite/project/cake.jpg',
                Price: 150,
                Quantity:1
            },
            {
                Name:'Strawberry cake',
                Description:"Strawberry cake with cherry on top and a sliced piece is right here!!",
                Image:'/craftisite/project/strawberry1.jpg',
                Price: 150,
                Quantity:1
            }
        ];
        var gift=[
            {
                Name:'Magic Pikachu',
                Description:"Give colour to your Pikachus!!",
                Image:'/craftisite/artcraft/magicpika.jpg',
                Price: 300,
                Quantity:1
            },
            
            {
                Name:'Unlimited Folds',
                Description:"Valentines day special!!",
                Image:'/craftisite/artcraft/folds.jpg',
                Price: 75,
                Quantity:1
            },
         
            {
                Name:'Slider Heart',
                Description:"Join your heart",
                Image:'/craftisite/artcraft/heart.jpg',
                Price: 80,
                Quantity:1
            },
            {
                Name:'Smiley Quote',
                Description:"Smiley with quote inside!!",
                Image:'/craftisite/artcraft/cool.jpg',
                Price: 50,
                Quantity:1
            },
            {
                Name:'Smiley Quote',
                Description:"Awesome smiley with cute quote inside!!",
                Image:'/craftisite/artcraft/kissy.jpg',
                Price: 50,
                Quantity:1
            },
            {
                Name:'Wedding Greeting',
                Description:"Gift the newly married couple with this creation",
                Image:'/craftisite/artcraft/greetings.jpg',
                Price: 350,
                Quantity:1
            },
            {
                Name:'Pen Stand',
                Description:"Make your things organized!!",
                Image:'/craftisite/artcraft/penstand.jpg',
                Price: 150,
                Quantity:1
            },
            {
                Name:'Secret Card',
                Description:"Hide some secrtet message inside!!",
                Image:'/craftisite/artcraft/secret_card.jpg',
                Price: 50,
                Quantity:1
            },
            {
                Name:'Slider Pikachu',
                Description:"Twist the pikachu!!",
                Image:'/craftisite/artcraft/slider.jpg',
                Price: 50,
                Quantity:1
            },
            {
                Name:'Cake Box',
                Description:"A cute cake box with images of your loved ones!!",
                Image:'/craftisite/artcraft/cakebox.jpg',
                Price: 300,
                Quantity:1
            },
        ];
var glasspaint=[    
    {
        Name:'Peacock',
        Image:'/craftisite/artcraft/peacock1.jpg',
        Price: 50,
        Quantity:1
    },
    {
        Name:'Butterfly',
        Image:'/craftisite/artcraft/buttergp.jpg',
        Price: 50,
        Quantity:1
    },
    {
        Name:'Angel',
        Image:'/craftisite/artcraft/angel.jpg',
        Price: 50,
        Quantity:1
    },
    {
        Name:'Birds',
        Image:'/craftisite/artcraft/birdgp.jpg',
        Price: 50,
        Quantity:1
    },
    {
        Name:'Flowers',
        Image:'/craftisite/artcraft/flowergp.jpg',
        Price: 50,
        Quantity:1
    },
    {
        Name:'Peacock',
        Image:'/craftisite/artcraft/peacockgp.jpg',
        Price: 50,
        Quantity:1
    },
    {
        Name:'Butterfly',
        Image:'/craftisite/artcraft/butterflygp.jpg',
        Price: 50,
        Quantity:1
    }
 
];
var origamis=[
    {
        Name:'Butterfly',
        Image:'/craftisite/artcraft/butterflies.jpg'

    },
    {
        Name:'Cube Rose',
        Image:'/craftisite/artcraft/cuberose.jpg'

    },
    {
        Name:'Butterfly',
        Image:'/craftisite/artcraft/butter.jpg'

    },
    {
        Name:'Butterfly',
        Image:'/craftisite/artcraft/butterfly1.jpg'

    },
    {
        Name:'Pikachu',
        Image:'/craftisite/artcraft/pikachu.jpg'

    }
];

// var vdos=[
//     {
//         Name:'Happy Birthday Mom',
//         Image:'/artcraft/greetings.mp4'
//     },
//     {
//         Name:'Magic Pikachu',
//         Image:'/artcraft/pikachu.mp4'
//     },
//     {
//         Name:'Secret Message Card',
//         Image:'/artcraft/secret.mp4'
//     },
//     {
//         Name:'Slider Heart',
//         Image:'/artcraft/dragheart.mp4'
//     },
//     {
//         Name:'Waterfall Card',
//         Image:'/artcraft/waterfall.mp4'
//     },
//     {
//         Name:'Slider',
//         Image:'/artcraft/slide.mp4'
//     },
//     {
//         Name:'Magic Heart',
//         Image:'/artcraft/magicheart.mp4'
//     },
//     {
//         Name:'Fold Cubes',
//         Image:'/artcraft/foldcubes.mp4'
//     },
//     {
//         Name:'Flowers',
//         Image:'/artcraft/flower.mp4'
//     },
//     {
//         Name:'Mini Gift',
//         Image:'/artcraft/card.mp4'
//     },
//     {
//         Name:'Cake Greetings',
//         Image:'/artcraft/cake.mp4'
//     },
//     {
//         Name:'Mini Birthday Card',
//         Image:'/artcraft/bday.mp4'
//     }
    
// ];

var works=[
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wpista.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wchocolate.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wdosa.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wgreet.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wkissy.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wpeacock.jpeg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wpeacock.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wpiece.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wpista1.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wrose.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wsmiley.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wstraw.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wstrawberry.jpg'
    },
    {
        Name:'Happy Birthday Mom',
        Image:'/craftisite/project/wsweet.jpg'
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
// service.getAllVideos=function(){
//     return vdos;
// }
service.getAllWorks=function(){
    return works;
}

var cart=[];

service.addItem=function(item){

  
      cart.push(item);
  
}

service.getItem=function(){
    return cart;
}

service.removeItem=function(itemm){
  
    cart.splice(itemm,1);
    
}
service.getPrice=function(){
    var price=0;
    for(var i in cart){
        console.log(cart[i].Price);
        price=price+cart[i].Price;
    
    }
return price;

}
}


   
})();