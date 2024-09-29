const testimonials=[{
    name:"Cherise G",
    photoUrl:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"I have been a loyal customer of apple for many years now and I can confidently say that they have never failed to impress me."
},
{
    name:"Cherise G",
    photoUrl:"https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"major issues with any of my Apple devices and their customer service is top-notch."
},
{
    name:"Cherise G",
    photoUrl:"https://plus.unsplash.com/premium_photo-1661768522616-c2e933c84651?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"I have been a loyal customer of Lenova for years now and I can confidently say that they are one of the best brands in the market. Their products are top-notch and their customer service is exceptional."
},
];
const imgE1=document.querySelector("img");
const textE1=document.querySelector(".text");
const usernameE1=document.querySelector(".username");
let idx=0;

updateTestimonial()
function updateTestimonial(){
     const {name,photoUrl,text}=testimonials[idx];
     imgE1.src=photoUrl;
     textE1.innerHTML=text;
     usernameE1.innerHTML=name;
     idx++;
     if(idx=== testimonials.length){
        idx=0;
     }
     setTimeout(()=>{
        updateTestimonial()
     },2000)

}