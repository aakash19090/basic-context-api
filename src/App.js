import React, { Component } from 'react';
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter';
class App extends Component {
    render() {
        return (
            <div>
                <ClickCounter name="Akash"/>
                <HoverCounter/>
            </div>    
        )
    }
}

export default App
