
var pass = document.querySelector("#password");
var conf = document.querySelector("#confirmation");

function redcolor() {
    if (pass.value != conf.value) {
        pass.style.color = "red";
        conf.style.color = "red";
    }
}