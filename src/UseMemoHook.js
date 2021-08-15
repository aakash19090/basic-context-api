import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {

    const [ counterOne, setCounterOne ] = useState(0)
    const [ counterTwo, setCounterTwo ] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    // ? Use Memo Hook Invokes the function call & stores the result in cache for performance optimization
    const isEven =  useMemo( () => {

        let i = 0
    
        while( i < 2000000000 ) i++
    
        return counterOne % 2 === 0

    }, [counterOne]) // ? Dependency Array 

    return (
        <div>
            <div className="btn">
                <button onClick={incrementOne}>Counter - { counterOne }</button> 
                <span> { isEven ? 'Even' : 'Odd' } </span>
            </div>

            <div className="btn">
                <button onClick={incrementTwo}>Counter - { counterTwo }</button>
            </div>
                
        </div>
    )
}

export default UseMemoHook