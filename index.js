

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }


    })
})


const hiddenItems = document.querySelectorAll(".hidden");
hiddenItems.forEach((el)=>observer.observe(el));
const observerx=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('slide');
        }
        else{
            entry.target.classList.remove('slide');
        }


    })
})

const xaxix = document.querySelectorAll(".noslide");
xaxix.forEach((el)=>observerx.observe(el));

const hamburger=querySelectorAll(".ham-btn");
const ham = querySelectorAll(".hamburger");
const anchor=querySelectorAll(a);
