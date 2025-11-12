function greet(name){
    return `Hello ${name}`
}
const printname = greet("Aryan");

function processUserInput(callback){
    const name = "Aryan";

    console.log(callback(name));
}

processUserInput(greet);

const handlecreate = (user) => {
    return `User create with name ${user}`;
}

console.log(handlecreate("Aryan Rathod"));