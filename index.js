let links = document.querySelectorAll(".college-hover a");
const college = document.querySelector("#college");
let timerId;

const showLinks = ()=>{
    clearInterval(timerId);
    links.forEach((link) =>{
        link.style.display = "block";
    })
}
const hideLInks = (event)=>{
    timerId = setTimeout(()=>{
        if(!event.relatedTarget || !college.contains(event.relatedTarget)){
            links.forEach((link) =>{
                link.style.display = "none";    
            })
        }
    },100)
}

college.addEventListener("mouseover",showLinks);
college.addEventListener("mouseout",hideLInks);

links.forEach((link)=>{
    link.addEventListener("mouseover",showLinks);
    link.addEventListener("mouseout",hideLInks);
})