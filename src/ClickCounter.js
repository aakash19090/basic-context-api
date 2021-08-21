import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={ this.props.incrementCount } > Clicked {this.props.counter} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter, 'Argument Here')
