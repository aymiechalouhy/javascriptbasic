var show = document.querySelector("#show");
var hide = document.querySelector("#hide");
var text1 = document.querySelector("p");

const change = (id)=>{
    if(id == "show"){
        text1.style.display = 'block';
    }
    if(id == "hide"){
        text1.style.display = 'none';
    }
};


show.addEventListener("click", ()=>{change("show");});
hide.addEventListener("click", ()=>{change("hide");});