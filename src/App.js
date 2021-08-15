import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class App extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            inputVal: ''
        }

        this.inputRef = React.createRef()
        this.forwardRef = React.createRef() // ? Will Forward this Ref to Child Component
    }
    

    setFocus = () => {

        // ? Using 'Current' property to access Dom nodes using Refs
        let inputElem = this.inputRef.current
        inputElem.focus()
        inputElem.classList.toggle('toggle')
        this.setState( { inputVal: 'Parent Toggled'  } )
    }

    render() {

        return (
            <div>
                <input ref={this.inputRef} type="text" value={this.state.inputVal} onChange={(e) => this.setState( { inputVal: e.target.value  } ) } />
                <button onClick={this.setFocus} > Parent - Click Here </button>
                
                {/* Forwarding Ref to Child Component */}
                <ChildComponent ref={this.forwardRef} />
            </div>    

        )
    }
}

export default App
