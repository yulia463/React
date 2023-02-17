import React from "react";
export type AccordionTitlePropsType={
    title:string
}
const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <h3 >
           --- {props.title} ---
        </h3>
    )
};
export default AccordionTitle;