import React from "react";
import AccordionTitle from "./accordionTitle";
import AccordionBody from "./accordionBody";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
};

