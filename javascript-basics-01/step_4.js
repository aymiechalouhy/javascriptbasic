
 function displaymsg(){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;  
    var city = document.getElementById('city').value;
    var res = "Hello " + name + " " + surname +"\nFrom " + city;
    alert(res);
    }