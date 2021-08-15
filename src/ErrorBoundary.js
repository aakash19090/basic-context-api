import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false
        }
    }
    
    static getDerivedStateFromError = (error) => {
        return {
            hasError: true
        }
    }

    componentDidCatch = (errors, info) => {
        console.log(errors)
        console.log(info)
    }

    render() {

        if(this.state.hasError){
            return (
                <h1> Error from Error Boundary </h1>        
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
