function resett(){
    var name = document.querySelector("#name");
    var surname = document.querySelector("#surname");
    var city = document.querySelector("#city");
   
  

      var res = confirm("Are you sure you want to reset?");
      if (res) {
          document.getElementById('name').value = "";
          document.getElementById('surname').value = "";
          document.getElementById('city').value = "";
      } else {
        
      }
   
}