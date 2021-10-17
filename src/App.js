import React, { useState, useCallback } from 'react'

const App = () => {

    const [inputValue2, setInputValue2] = useState('')

    const callApi = async(event) => {
        const fetchResponse = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const responseData = await fetchResponse.json()
        console.log(responseData);
    }

    const debouncedFunction = (func, delay) => {
        let timer
        return (...args) => {
            const context = this
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                timer = null
                func.apply(context, args)
            }, delay)
        }
    }

    const betterFunction = useCallback(debouncedFunction(callApi, 500), [])

    return (
        <div>
            {/* Method 1 :- with Uncontrollable Input */}
            <h3> Method 1 :- with Uncontrollable Input </h3>
            <input type="text" onKeyUp={ betterFunction} />
        </div>
    )
}

export default App
