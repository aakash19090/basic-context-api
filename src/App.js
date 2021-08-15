import React, { Component } from 'react';
import PortalDemo from './PortalDemo';
class App extends Component {
    render() {
        return (
            <div className='Child Component'>
                <PortalDemo/>
            </div>    
        )
    }
}

export default App
