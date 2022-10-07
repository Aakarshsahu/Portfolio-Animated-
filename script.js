gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions:"play none none reverse"
})


gsap.to('.img-container',{
  scale:52,
  ease:"ease",
  scrollTrigger:{
    trigger:'.video-section',
    scrub:1,
    start:"top top",
    end:"bottom",
    pin:true
  }
})


gsap.to('.right' ,{
  autoAlpha:0,
  x:500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})
gsap.to('.left' ,{
  autoAlpha:0,
  x:-500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})


gsap.to('.txt-bottom',{
  autoAlpha:0,
  letterSpacing:-10,
  duration:2,
  scrollTrigger:{
    start:2
  }
})


const tl = gsap.timeline();

tl.from('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).from('.right-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})



ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:1,
  pin:true,
  ease:"ease"
})



gsap.utils.toArray('.col').forEach(image=>{
  gsap.fromTo(image,{
    opacity:.3,
    x:0
  },{
    opacity:1,
    x:-50,
    scrollTrigger:{
      trigger:image,
      start:"10%",
      stagger:{
        amount:.4
      }
    }
  })
})

const timeline = gsap.timeline();

timeline.from('.title span' ,{
  y:150,
  skewY:7,
  duration:3
}).from('.txt-bottom',{
  letterSpacing:-10,
  opacity:0,
  duration:3
})


gsap.to(".pic",{
  rotate:360,
  // scrollTrigger:{
  //   trigger:".pic",
  //   start:"top 60%",
  // },
  repeat:-1,
  ease:Linear.easeNone, 
  duration:8,
},"2")


gsap.from(".upper-img img",{
  scale:0,
  rotate:360,
  // scrollTrigger: '.upper-img',
  scrollTrigger:{
    trigger:".upper-img img",
    start:"top 70%",
    // markers:true,
  },
  ease:Linear.easeNone,
  duration:2,
  // repeat:-1,
  
})


const time = gsap.timeline();
time.from(".d1",{
  scrollTrigger:'.d1',
  scale:2,
  ease:Linear.easeNone,
  duration:2,
  // repeat:-1,

  
})





function skey(){
  var dim = document.querySelector(".card").getBoundingClientRect();
  var prev = dim.left;

    document.querySelector(".cards").addEventListener("scroll",function(){
      
       
          var dim2 = document.querySelector(".card").getBoundingClientRect();
          var diff = prev - dim2.left;
          document.querySelectorAll(".card").forEach(function(every){
            every.style.transform = `skew(${diff*0.1}deg)`;
          })
          prev = dim2.left;
      
      

    })
}

skey();










function mousemove(){
  document.querySelectorAll(".card").forEach(function(abc){
    abc.addEventListener("mousemove",function(e){
      if(e.target.tagName !== 'IMG') return;
  
      var dim = e.target.parentElement.getBoundingClientRect();
       
      
        e.target.style.clipPath = `circle(25% at ${e.clientX - dim.left}px ${e.clientY - dim.top}px)`;
      
    })
  
    
  
    
  
  })
  
}
mousemove();








// document.querySelectorAll(".card").forEach(function(abc){
  
//   abc.addEventListener("mousemove",function(dets){
//     // console.log(dets);
//     // console.log(dets.target);
  
//     var dim = document.querySelector(".card").getBoundingClientRect();
//     document.querySelector(".card img").style.clipPath = `circle(25% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
//   })
  
  
//   abc.addEventListener("mouseleave",function(dets){
//     // console.log(dets);
//     // console.log(dets.target);
//     var dim = document.querySelector(".card").getBoundingClientRect();
//     document.querySelector(".card img").style.clipPath = `circle(0%)`
//   })
// })









// document.querySelector(".card").addEventListener("mousemove",function(dets){
//   // console.log(dets);
//   // console.log(dets.target);
//   var dim = document.querySelector(".card").getBoundingClientRect();
//   document.querySelector(".card img").style.clipPath = `circle(25% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
// })


// document.querySelector(".card").addEventListener("mouseleave",function(dets){
//   // console.log(dets);
//   // console.log(dets.target);
//   var dim = document.querySelector(".card").getBoundingClientRect();
//   document.querySelector(".card img").style.clipPath = `circle(0%)`
// })



// var cursor = document.querySelector("#cursor");
// var div = document.querySelector(".info");
// info.addEventListener("mousemove",(e) =>{
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';
  
// })