import React, { useState } from 'react'

const ChildComponent =  React.forwardRef( (props, ref) => {  // ? Use Forwared Ref from Parent Component with React.forwardRef

    const [ inputVal, setInputVal ] = useState('')

    const setFocus = () => {
        ref.current.focus()
        setInputVal('Child Toggled')
    }

    return (
        <div>
            <input ref={ref}  type="text" value={inputVal} onChange={(e) => setInputVal( e.target.value ) } />
            <button onClick={setFocus} > Child - Click Here </button>
        </div>
    )
});

export default ChildComponent
