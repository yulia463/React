import React from "react";
import {RatingValueType} from "../Rating/rating";

export type StarPropsType = {
    selected: boolean
    onClick:(value:RatingValueType)=>void
    value:RatingValueType

}

const Star = (props: StarPropsType) => {


    return<span onClick={()=>{props.onClick(props.value)}} >
        {props.selected?<b>star</b> : "star"}
    </span>
};
export default Star;