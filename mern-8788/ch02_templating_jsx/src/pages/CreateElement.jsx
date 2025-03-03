import React,{createElement} from 'react'

function CreateElement() {
    return createElement(
        'div',{className:'bg-danger'},'Hello World',createElement('a',{href:"/"},'Here'),
        createElement('p',null,'dever',createElement('h5',null,'h5 demo')),
        createElement('h2',null,'Demo')
    )
}

export default CreateElement