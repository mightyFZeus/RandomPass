function password() {
    
// get the value of the slider
const length = document.getElementById('area').value;
//set an empty string
let pass = "";
//possible values
const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*()";
// loop through the possible values
for (var i = 0; i <= length; i++) {
     pass = pass +  values.charAt(Math.floor(Math.random() * values.length - 1));
    
}
// display generated password
document.getElementById('demo').innerHTML = 'The Password Generated of length ' + length + ' is : ' +     pass;

}
// default value of the slider
document.getElementById('length').innerHTML = 'length: 15' ;
// slider vaue based on slider position
document.getElementById('area').oninput = function () {
    if (document.getElementById('area').value > 0) {
        var lengthOfSlider = document.getElementById('area').value;
        document.getElementById('length').innerHTML = "length: " + lengthOfSlider;
    } else {
        document.getElementById('length').innerHTML= "length: 1";
    }
    
}
