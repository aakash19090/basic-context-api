import React, { Component } from 'react';
import ThemeContext from './ThemeContext'
import Theme from './Theme'
class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            primaryTheme: 'theme1',
            primaryThemeColor: '#496bbe',
            secondaryTheme: 'theme2',
            secondaryThemeColor: '#cccccc',
            activetheme: 'Theme 1'
        }
    }

    changeTheme = () => {
        const currTheme = this.state.activetheme
        if(currTheme === 'Theme 1' ){
            this.setState({
                ...this.state,
                activetheme: 'Theme 2'
            })
        }else{
            this.setState({
                ...this.state,
                activetheme: 'Theme 1'
            })
        }

    }
    
    render() {
        return (
            <ThemeContext.Provider value={{
                state: this.state,
                changeTheme: this.changeTheme
            }} >
                <div className="App">
                    <Theme/>
                </div>
            </ThemeContext.Provider>
                
        )
    }
}

export default App
