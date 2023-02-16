import React, {useState} from "react";
import UncontrolledaccordionTitle from "./UncontrolledaccordionTitle";
import UncontrolledaccordionBody from "./UncontrolledaccordionBody";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
export const Uncontrolledaccordion = (props: AccordionPropsType) => {

    let [collapsed,setCollapsed]= useState(true)
    return (
        <div>
            <UncontrolledaccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>

            {!collapsed && <UncontrolledaccordionBody/>}
        </div>
    )
};

