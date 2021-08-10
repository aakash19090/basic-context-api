import React from 'react'
import ThemeContext from './ThemeContext'

function Theme() {

    return (
        <ThemeContext.Consumer>
            {
                (context) => {
                    const themeColor = context.state.activetheme === 'Theme 1' ? context.state.secondaryThemeColor : context.state.primaryThemeColor 
                    return(
                        <div className="wrapper" style={{
                            'backgroundColor': themeColor,
                            'minHeight': '100vh'

                        }}>
                            <button onClick={context.changeTheme}>Change to {context.state.activetheme === 'Theme 1' ? 'Theme 2':'Theme 1'}</button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default Theme
