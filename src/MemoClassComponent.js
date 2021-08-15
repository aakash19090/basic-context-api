// ? Class Component

import React, { Component } from 'react'
class MemoClassComponent extends Component {
    render() {
        console.log('*********** MEMO COMPONENT *********** ')
        console.log(this.props.name)
        return (
            <div>
                Memo Component { this.props.name }
            </div>
        )
    }
}

export default  React.memo(MemoClassComponent)



//  Functional Component 

// import React from 'react'

// function MemoClassComponent({ name }) {
//     console.log('*********** MEMO COMPONENT *********** ')
//     console.log(name)
//     return (
//         <div>
//             Memo Component { name }
//         </div>
//     )
// }

// export default React.memo(MemoClassComponent)
