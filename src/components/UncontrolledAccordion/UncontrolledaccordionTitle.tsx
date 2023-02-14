import React from "react";

export type AccordionTitlePropsType={
    title:string
}
const UncontrolledaccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <h3>
           --- {props.title} ---
        </h3>
    )
};
export default UncontrolledaccordionTitle;