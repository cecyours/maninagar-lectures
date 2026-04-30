
function helloUser() {
    var username = "Hello"
    console.log("inner", username);
}

var fullName = "Vikash Prajapati"

function helloVikash() {

console.log(fullName);

}

console.log(fullName);




helloUser()




console.log("Outer", username);

