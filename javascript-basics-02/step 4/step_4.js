function resett(){
    var name = document.querySelector("#name");
    var surname = document.querySelector("#surname");
    var city = document.querySelector("#city");
   
    var info = confirm("Clear all fields ?");
          if (info) {
            name.value = " ";
            surname.value = " ";
            city.value = " ";
          }
}