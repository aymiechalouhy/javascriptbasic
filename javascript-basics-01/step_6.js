function msg() {
   var fn = document.getElementById('first_number').value;
   var sn = document.getElementById('second_number').value;  
   var fmsg = fn % sn ;
   alert(fn + " mode " + sn + " = " + fmsg);
 }