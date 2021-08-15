import React, { PureComponent } from 'react'

class PureComponentt extends PureComponent {
    render() {
        console.log('*********** PURE COMPONENT *********** ')
        console.log(this.props.name)
        return (
            <div>
                Pure Component { this.props.name }
            </div>
        )
    }
}

export default PureComponentt
