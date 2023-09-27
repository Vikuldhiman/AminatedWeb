gsap.to(".imgcontainer",{
ease: Expo.easeInOut,
width: "100%",
duration: 2 ,
stagger: 2  
})

gsap.to(".text h1",{
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
})
gsap.to(".text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
})


// document.querySelectorAll(".imgcontainer")
// .forEach(function(elem){
//     gsap.to(elem, {
//         ease: Expo.easeInOut,
//         width: "100%",
//         duration: 2,
//         stagger: 2
//     })
// })