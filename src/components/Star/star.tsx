import React from "react";
// export type StarPropsType={
//     selected:boolean
// }
const Star = (props:any) => {
    if(props.selected === true){
        return<span><b> star </b></span>
    }else{
        return <span> star </span>
    }
};
export default Star;