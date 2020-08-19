import React from 'react'

const style = {
    color: 'red',
    textShadow: '2px 2px'
}

function Child(props) {
    return(
        <div>
            <span style = {props.col} >Hello: {props.herNumber}</span>
        </div>
    )
}

export {Child}