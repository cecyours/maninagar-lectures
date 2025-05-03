// fetch('https://jsonplaceholder.typicode.com/todos/8')
//     .then(response => response.json())
//     .then(json => console.log(json))


const axios = require('axios')


axios.get('http://localhost:9000').then(res => {
    console.log(res.data);
})

