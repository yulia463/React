import React from "react";
import AccordionTitle from "./accordionTitle";
import AccordionBody from "./accordionBody";

const Accordion = (props:any) => {
    return (
        <div>
           <AccordionTitle title={"Menu"}/>
           <AccordionBody/>
        </div>
    )
};
export default Accordion;