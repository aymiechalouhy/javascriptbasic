function msg() {
    var ss = document.getElementById('shoe_size').value;
    var br = document.getElementById('year').value;
    var res = ((((ss * 2) + 5) * 50)- br) + 1766 ;
    alert("result =" + res);
  }
 