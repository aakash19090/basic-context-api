import React, { useState, useCallback } from 'react'
import debounce from 'lodash.debounce';

const App = () => {

    const [inputValue2, setInputValue2] = useState('')

    const callApi = debounce(async(event) => {
        const fetchResponse = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const responseData = await fetchResponse.json()
        console.log(responseData);
    }, 500) 

    // const debouncedFunction = (func, delay) => {
    //     let timer
    //     return (...args) => {
    //         const context = this
    //         if(timer){
    //             clearTimeout(timer)
    //         }
    //         timer = setTimeout(() => {
    //             timer = null
    //             func.apply(context, args)
    //         }, delay)
    //     }
    // }

    // const betterFunction = useCallback(debouncedFunction(callApi, 500), [])

    return (
        <div>
            <h3> Method 2 :- with Loadash </h3>
            <input type="text" onKeyUp={(e) => callApi(e) } />
        </div>
    )
}

export default App
