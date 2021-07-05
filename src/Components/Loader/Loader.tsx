import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
    message: string
}

const Loader = ({message}: Props) =>{
    return (

        <div>
            <div>
                <div className="ui active dimmer">
                    <div className="ui text loader">{message}</div>
                </div>
                <p></p>
            </div>
        </div>
        


    )
}

Loader.defaultProps = {
    message: "Loading ..."
}

export default Loader