import React from 'react'

export default function Color(props) {
    let status = "Ожидается";
    function element(props) {
        switch (props) {
            case "pednding":
                status = "Ожидается"
                break
            case "out_of_stock":
                status = "Нет в наличии"
                break
            case "in_stock":
                status = "В наличии"
                break
            default:
                break
        }
        return (
            <div style={{ width: 104 }}>{status}</div>
        )
    }
    return (
        <>
            {element(props.status)}
        </>
    )
}
