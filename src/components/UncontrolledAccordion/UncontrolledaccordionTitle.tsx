import React from "react";

export type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
const UncontrolledaccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {props.onClick()}}>--- {props.title} ---</h3>
    )
};
export default UncontrolledaccordionTitle;