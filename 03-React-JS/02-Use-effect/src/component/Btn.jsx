import React from 'react'

const Btn = ({title , color , func}) => {
    return (
        <button style={{
            backgroundColor: color ? color : "lightblue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
        }}
        onClick={func}
        >{title}</button>
    )
}

export default Btn