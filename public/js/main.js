// // jshint esversion:6
// var enableCall = true;
// var plax = $('.plax')[0];
// var navbarLinks = $('.navbar-link');
// var isVanilla = true;
// var isScuffedGrey = false;
//
// // Change color of navbar links when they enter second section of homepage
// if (plax)
//   plax.addEventListener('scroll', function(event) {
//     // Prevent function from being called during timeout
//     if (!enableCall)
//       return;
//     enableCall = false;
//
//     // homepage first section height
//     let firstHomepageSectionHeight = window.innerWidth * 0.5435 + window.innerHeight;
//
//     // Change color of navbar links when background color needs contrast
//     if (isVanilla && plax.scrollTop >= firstHomepageSectionHeight) {
//       for (let i = 0; i < navbarLinks.length; ++i)
//         navbarLinks[i].setAttribute('class', 'navbar-link text-scuffed-light-grey');
//       isVanilla = false;
//       isScuffedGrey = true;
//     }
//
//     if(isScuffedGrey && plax.scrollTop < firstHomepageSectionHeight){
//       for (let i = 0; i < navbarLinks.length; ++i)
//         navbarLinks[i].setAttribute('class', 'navbar-link text-vanilla-grey');
//       isVanilla = true;
//       isScuffedGrey = false;
//     }
//
//     setTimeout(() => enableCall = true, 100);
//   });
































// EOF
