function myFunction() {
    var str = "hello";
    var text ="";

for (var i = 0; i < 5; i++) {
  if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u") {
    text += "ub" + str.charAt(i);
  }
    else {
        text += str.charAt(i);
    }
}
document.getElementById("demo").innerHTML = text;
}
