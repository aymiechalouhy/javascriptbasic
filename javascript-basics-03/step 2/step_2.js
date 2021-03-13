var show = document.querySelector("#show");
var hide = document.querySelector("#hide");
var tt = document.querySelector("p");

const change = (id)=>{
    if(id == "show"){
        tt.style.display = 'block';
    }
    if(id == "hide"){
        tt.style.display = 'none';
    }
};


show.addEventListener("click", ()=>{change("show");});
hide.addEventListener("click", ()=>{change("hide");});