import React, {useState} from 'react';
import '../App.css';
import PageTitle from "./title";
import {Accordion} from "./Accordion/accordion";
import Rating, {RatingValueType} from "./Rating/rating";
import {OnOff} from "./OnOff/OnOff";
import {Uncontrolledaccordion} from "./UncontrolledAccordion/Uncontrolledaccordion";
import Unncontralledrating from "./UnncontralledRating/Unncontralledrating";
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";
import {DifficultCountingExample, HelpsForReactMemo} from "./UseMemo/UseMemo";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(true)
    return (
        <div>
            acc
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            <Accordion titleValue={"menu"} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>
            {/*Article 2*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}


            {/*<Uncontrolledaccordion titleValue={"menu"} collapsed={true}/>*/}
            {/*<Uncontrolledaccordion titleValue={"users"} collapsed={false}/>*/}
            {/*<Unncontralledrating/>*/}
            {/*<Unncontralledrating/>*/}
            {/*<OnOff onChange={setSwitchOn} on={switchOn}/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/>*/}
            <DifficultCountingExample/>
            <HelpsForReactMemo/>
        </div>
    );
}


export default App;
