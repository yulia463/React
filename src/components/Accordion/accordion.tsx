import React from "react";
import AccordionTitle from "./accordionTitle";
import AccordionBody from "./accordionBody";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
const Accordion = (props: AccordionPropsType) => {
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    } else {
      return  <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    }

};
export default Accordion;