var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var img4 = document.querySelector("#image4");
var img5 = document.querySelector("#image5");

const  changeImg = (id) => {
    if(id == "img1"){
        img1.src = "images/image1_2.jpg";
    }
    else if(id == "img2"){
        img2.src = "images/image2_2.jpg";
    }
    else if(id == "img3"){
        img3.src = "images/image3_2.jpg";
    }
    else if(id == "img4"){
        img4.src = "images/image4_2.jpg";
    }
    else if(id == "img5")
        img5.src = "images/image5_2.jpg";
};

img1.addEventListener("mouseover", ()=>{changeImg("img1")} );
img2.addEventListener("mouseover", ()=>{changeImg("img2")} );
img3.addEventListener("mouseover", ()=>{changeImg("img3")} );
img4.addEventListener("mouseover", ()=>{changeImg("img4")} );
img5.addEventListener("mouseover", ()=>{changeImg("img5")} );