import React, { Component } from 'react';
class App extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            inputVal: ''
        }

        this.inputRef = React.createRef()
    }
    

    setFocus = () => {

        // ? Using 'Current' property to access Dom nodes using Refs
        let inputElem = this.inputRef.current
        inputElem.focus()
        inputElem.classList.toggle('toggle')
        this.setState( { inputVal: 'Toggled'  } )
    }

    render() {

        return (
            <div>
                <input ref={this.inputRef} type="text" value={this.state.inputVal} onChange={(e) => this.setState( { inputVal: e.target.value  } ) } />
                <button onClick={this.setFocus} > Click Here </button>
            </div>    

        )
    }
}

export default App
