import React from 'react'
import ReactDOM from 'react-dom'

const Loader = (props) =>{
    return (

        <>
            <div>
                <div class="ui active dimmer">
                    <div class="ui text loader">{props.message}</div>
                </div>
                <p></p>
            </div>
        </>
        


    )
}

Loader.defaultProps = {
    message: "Loading ..."
}

export default Loader