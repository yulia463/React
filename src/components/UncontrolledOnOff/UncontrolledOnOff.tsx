import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
}


export const UncontrolledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };
const onCliked = () =>{
    setOn(true);
    props.onChange(true)
}
const offCliked= () =>{
    setOn(false);props.onChange(false)
}
    return (
        <div>
            <div style={onStyle} onClick={onCliked}>On</div>
            <div style={offStyle} onClick={offCliked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}