import React from 'react'

const Link = () => {
    const href = 'https://github.com/odemur/react-todo-app'
    return (
        <div className="center-text link">
            <a href={href} target="_blank"><small>Check code on Github!</small></a>
        </div>
    )
}

export default Link