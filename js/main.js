
(function ($) {

// for lib wow to do animate
    new WOW().init();

// this for navbar
var $navbarToggler = $(".navbar-toggler");
var $navbar = $(".navbar-collapse");
var $openNav = $(".open");
var $colsNave = $(".colse");

    if($navbar.css("display" , "none" )){
        $($navbarToggler).on('click' , function(){
            $navbar.css("display" , "block" );
            $openNav.css("display" , "none").fadeOut("slow");
            $colsNave.css("display" , "block" ).fadeIn("slow");
        })
    } 
    $colsNave.on("click" , function(){
        $navbar.css("display" , "none" );
        $openNav.css("display" , "block").fadeIn("slow");
        $colsNave.css("display" , "none" ).fadeOut("slow");
    });
// to play vedio onMouse hove
let clipVideo = document.querySelector(".vid");
let clipVideoO = document.querySelector(".vidO");
let clipVideoT = document.querySelector(".vidT");
    clipVideo.addEventListener("mouseover", function (e) {
        clipVideo.play();
     })
     clipVideo.addEventListener("mouseout", function (e) {
        clipVideo.pause();
     })
    
     clipVideoO.addEventListener("mouseover", function (e) {
        clipVideoO.play();
     })
     clipVideoO.addEventListener("mouseout", function (e) {
        clipVideoO.pause();
     })
     clipVideoT.addEventListener("mouseover", function (e) {
        clipVideoT.play();
     })
     clipVideoT.addEventListener("mouseout", function (e) {
        clipVideoT.pause();
     })
 let clipVideQ = document.querySelector(".vidQ");
let clipVideoW = document.querySelector(".vidW");
let clipVideoE = document.querySelector(".vidE");
clipVideQ.addEventListener("mouseover", function (e) {
    clipVideQ.play();
     })
     clipVideQ.addEventListener("mouseout", function (e) {
        clipVideQ.pause();
     })
    
     clipVideoW.addEventListener("mouseover", function (e) {
        clipVideoW.play();
     })
     clipVideoW.addEventListener("mouseout", function (e) {
        clipVideoW.pause();
     })
     clipVideoE.addEventListener("mouseover", function (e) {
        clipVideoE.play();
     })
     clipVideoE.addEventListener("mouseout", function (e) {
        clipVideoE.pause();
     })
     let clipVideR = document.querySelector(".vidR");
     let clipVideoU = document.querySelector(".vidU");
     let clipVideoY = document.querySelector(".vidY");
     clipVideR.addEventListener("mouseover", function (e) {
      clipVideR.play();
       })
       clipVideR.addEventListener("mouseout", function (e) {
         clipVideR.pause();
       })
      
       clipVideoU.addEventListener("mouseover", function (e) {
         clipVideoU.play();
       })
       clipVideoU.addEventListener("mouseout", function (e) {
         clipVideoU.pause();
       })
       clipVideoY.addEventListener("mouseover", function (e) {
         clipVideoY.play();
       })
       clipVideoY.addEventListener("mouseout", function (e) {
         clipVideoY.pause();
       })
       let clipVideI = document.querySelector(".vidI");
       let clipVideoA = document.querySelector(".vidA");
       let clipVideoS = document.querySelector(".vidS");
       clipVideI.addEventListener("mouseover", function (e) {
         clipVideI.play();
         })
         clipVideI.addEventListener("mouseout", function (e) {
            clipVideI.pause();
         })
        
         clipVideoA.addEventListener("mouseover", function (e) {
            clipVideoA.play();
         })
         clipVideoA.addEventListener("mouseout", function (e) {
            clipVideoA.pause();
         })
         clipVideoS.addEventListener("mouseover", function (e) {
            clipVideoS.play();
         })
         clipVideoS.addEventListener("mouseout", function (e) {
            clipVideoS.pause();
         })
         let clipVideD = document.querySelector(".vidD");
         let clipVideoF = document.querySelector(".vidF");
         let clipVideoG = document.querySelector(".vidG");
         clipVideD.addEventListener("mouseover", function (e) {
            clipVideD.play();
           })
           clipVideD.addEventListener("mouseout", function (e) {
            clipVideD.pause();
           })
          
           clipVideoF.addEventListener("mouseover", function (e) {
            clipVideoF.play();
           })
           clipVideoF.addEventListener("mouseout", function (e) {
            clipVideoF.pause();
           })
           clipVideoG.addEventListener("mouseover", function (e) {
            clipVideoG.play();
           })
           clipVideoG.addEventListener("mouseout", function (e) {
            clipVideoG.pause();
           })
           let clipVideH = document.querySelector(".vidH");
           let clipVideoJ = document.querySelector(".vidJ");
           let clipVideoK = document.querySelector(".vidK");
           clipVideH.addEventListener("mouseover", function (e) {
            clipVideH.play();
             })
             clipVideH.addEventListener("mouseout", function (e) {
               clipVideH.pause();
             })
            
             clipVideoJ.addEventListener("mouseover", function (e) {
               clipVideoJ.play();
             })
             clipVideoJ.addEventListener("mouseout", function (e) {
               clipVideoJ.pause();
             })
             clipVideoK.addEventListener("mouseover", function (e) {
               clipVideoK.play();
             })
             clipVideoK.addEventListener("mouseout", function (e) {
               clipVideoK.pause();
             })
             let clipVideL = document.querySelector(".vidL");
             let clipVideoZ = document.querySelector(".vidZ");
             let clipVideoX = document.querySelector(".vidX");
             clipVideL.addEventListener("mouseover", function (e) {
               clipVideL.play();
               })
               clipVideL.addEventListener("mouseout", function (e) {
                  clipVideL.pause();
               })
              
               clipVideoZ.addEventListener("mouseover", function (e) {
                  clipVideoZ.play();
               })
               clipVideoZ.addEventListener("mouseout", function (e) {
                  clipVideoZ.pause();
               })
               clipVideoX.addEventListener("mouseover", function (e) {
                  clipVideoX.play();
               })
               clipVideoX.addEventListener("mouseout", function (e) {
                  clipVideoX.pause();
               })
               let clipVideC = document.querySelector(".vidC");
               let clipVideoV = document.querySelector(".vidV");
               let clipVideoB = document.querySelector(".vidB");
               clipVideC.addEventListener("mouseover", function (e) {
                  clipVideC.play();
                 })
                 clipVideC.addEventListener("mouseout", function (e) {
                  clipVideC.pause();
                 })
                
                 clipVideoV.addEventListener("mouseover", function (e) {
                  clipVideoV.play();
                 })
                 clipVideoV.addEventListener("mouseout", function (e) {
                  clipVideoV.pause();
                 })
                 clipVideoB.addEventListener("mouseover", function (e) {
                  clipVideoB.play();
                 })
                 clipVideoB.addEventListener("mouseout", function (e) {
                  clipVideoB.pause();
                 });

                 var currentAddAll = $('.all');
                 var currentAddWar = $('.war');
                 var currentAddZombie = $('.zombie');
                 var currentAddSport = $('.sport');
                 var currentAddGirl = $('.girl');
                 var currentAddFunny = $('.funny'); 
                 
                 var currentRemoveAll = $('.owl-all');
                 var currentRemoveWar = $('.owl-Action');
                 var currentRemoveZombie = $('.owl-zombie');
                 var currentRemoveSport = $('.owl-sport');
                 var currentRemoveGirl = $('.owl-girl');
                 var currentRemoveFunny = $('.owl-funny'); 

                 $(currentRemoveAll).click(function(){
                  currentAddAll.removeClass('disActive');
                  currentAddWar.removeClass('disActive');
                  currentAddZombie.removeClass('disActive');
                  currentAddSport.removeClass('disActive');
                  currentAddGirl.removeClass('disActive');
                  currentAddFunny.removeClass('disActive');

                 });
                 $(currentRemoveWar).click(function(){
                  currentAddAll.addClass('disActive');
                  currentAddWar.removeClass('disActive');
                  currentAddZombie.addClass('disActive');
                  currentAddSport.addClass('disActive');
                  currentAddGirl.addClass('disActive');
                  currentAddFunny.addClass('disActive');
                 });  
                 $(currentRemoveZombie).click(function(){
                  currentAddAll.addClass('disActive');
                  currentAddWar.addClass('disActive');
                  currentAddZombie.removeClass('disActive');
                  currentAddSport.addClass('disActive');
                  currentAddGirl.addClass('disActive');
                  currentAddFunny.addClass('disActive');
                 });  
                 $(currentRemoveSport).click(function(){
                  currentAddAll.addClass('disActive');
                  currentAddWar.addClass('disActive');
                  currentAddZombie.addClass('disActive');
                  currentAddSport.removeClass('disActive');
                  currentAddGirl.addClass('disActive');
                  currentAddFunny.addClass('disActive');
                 });  
                 $(currentRemoveGirl).click(function(){
                  currentAddAll.addClass('disActive');
                  currentAddWar.addClass('disActive');
                  currentAddZombie.addClass('disActive');
                  currentAddSport.addClass('disActive');
                  currentAddGirl.removeClass('disActive');
                  currentAddFunny.addClass('disActive');
                 });    
                 $(currentRemoveFunny).click(function(){
                  currentAddAll.addClass('disActive');
                  currentAddWar.addClass('disActive');
                  currentAddZombie.addClass('disActive');
                  currentAddSport.addClass('disActive');
                  currentAddGirl.addClass('disActive');
                  currentAddFunny.removeClass('disActive');
                 });  
                  
                 const elm = document.querySelector('.owl-dots');
                 elm.addEventListener('click', (el) => {
                   const elActive = elm.querySelector('.activation');
                   if (elActive) {
                     elActive.removeAttribute('class');
                   }
                   el.target.setAttribute('class', 'activation');
                 });


      // button back to top
      let back = document.querySelector(".back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   back.style.display = "block";
  } else {
   back.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
})(jQuery);