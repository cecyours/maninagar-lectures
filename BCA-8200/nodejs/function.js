function greet(name) {
    return `hello ${name}`
}
const printWithName = greet("sania")



function processUserInput(callback) {
    const name = "Sania"

    console.log(callback(name));
}

processUserInput(greet)

const handlecreate = (user) => {
    return `User created with name ${user}`
}

console.log(handlecreate("Mine"));
