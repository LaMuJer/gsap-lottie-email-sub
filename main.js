import './style.css'
import {gsap} from "gsap";

let tl = gsap.timeline({
    defaults:{
        duration:1,
    }
})

let tl2 = gsap.timeline({
    defaults:{
        opacity:0,
    }
})

function init() {
    tl.from(".circle1" , {repeat:-1, yoyo:true, opacity:0, scale:1.1, })
    tl.from(".circle2" , {repeat:-1, yoyo:true, opacity:0, scale:1.1, },)
    tl.from(".circle3" , {repeat:-1, yoyo:true, opacity:0, scale:1.1, },)

    tl2.from(".box" , {opacity:0})
    tl2.from(".onstart" , {scale:0 , opacity:0,} , "-=.5")
    tl2.from("h2" , {scale:0,} , )
    tl2.from(".email-y" , {y:20 , stagger:.2} , )
}

window.addEventListener("load" , () => init())

let btn = document.querySelector(".btn")
let success = document.getElementById("success")
btn.addEventListener("click" , () => {
    //  gsap
    tl2.to(".box" , {opacity:0})
    tl2.to(".onstart" , {scale:0 , opacity:0,} , "-=.5" )
    tl2.to("h2" , {scale:0,} , "-=.5")
    tl2.to(".email-y" , {y:20 , stagger:.2} , "-=.5")

    success.classList.add("z-layer")
    tl2.to("#success" , {opacity:1 ,})
    tl2.from("#lottie" , {y:100} , "-=.5")
})