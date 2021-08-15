import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal (
        <h1>
            Portal Body
        </h1>,
        document.getElementById('portal-root')  // ? Rendering this in Different root. Check index.html in Public Folder
    )
}

export default PortalDemo
