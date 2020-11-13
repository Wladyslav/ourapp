import React from 'react'

const NameForm = ({name,onChange}) => {
    return (
        <div style={{position: 'fixed', bottom: "0", width: "100vw", height: "100px", backgroundColor: "blue", zIndex: "9999999"}}>
            <button onClick={onChange}>CLICK</button>
        </div>
    )
}


export default NameForm;