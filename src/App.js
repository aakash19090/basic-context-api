import React, { Component } from 'react';
import PureComponentt from './PureComponent'
import RegularComponent from './RegularComponent';

let interval
class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Akash'
        }
    }

    componentDidMount = () => {
        interval = setInterval( () => {
            this.setState({
                name : 'Akash'
            })
        }, 2000 )
    }
    
    componentWillUnmount = () => {
        clearInterval(interval)
    }
    
    render() {
        console.log('*********** PARENT COMPONENT *********** ')
        return (
            <div>
                <RegularComponent name={this.state.name} />
                <PureComponentt name={this.state.name} />
            </div>    
        )
    }
}

export default App
