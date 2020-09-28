import React from 'react'

export default function Color(props) {
    let color = "#fff";
    function element(props) {
        switch (props) {
            case "black":
                color = "#000"
                break
            case "red":
                color = "#DD1C10"
                break
            case "grey":
                color = "#C4C4C4"
                break
            case "green":
                color = "#77CF61"
                break
            default:
                break
        }
        return (
            <div style={{ backgroundColor: color, width: "19px", height: "19px", borderRadius: "50%" }}></div>
        )
    }

    return (
        <>
            {element(props.color)}
        </>
    )
}
