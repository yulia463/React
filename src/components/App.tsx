import React, {useState} from 'react';
import '../App.css';
import PageTitle from "./title";
import {Accordion} from "./Accordion/accordion";
import Rating, {RatingPropsType, RatingValueType} from "./Rating/rating";
import {OnOff} from "./OnOff/OnOff";
import {Uncontrolledaccordion} from "./UncontrolledAccordion/Uncontrolledaccordion";
import Unncontralledrating from "./UnncontralledRating/Unncontralledrating";
import rating from "./Rating/rating";
import Star from "./Star/star";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let[accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false)
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Accordion titleValue={"menu"} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <OnOff/>
            <Uncontrolledaccordion titleValue={"menu"} collapsed={true}/>
            <Uncontrolledaccordion titleValue={"users"} collapsed={false}/>
            <Unncontralledrating/>
            <Unncontralledrating/>


        </div>
    );
}


export default App;
