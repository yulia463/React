import React from 'react';
import '../App.css';
import PageTitle from "./title";
import {Accordion} from "./Accordion/accordion";
import Rating from "./Rating/rating";
import {OnOff} from "./OnOff/OnOff";
import {Uncontrolledaccordion} from "./UncontrolledAccordion/Uncontrolledaccordion";
import Unncontralledrating from "./UnncontralledRating/Unncontralledrating";
import rating from "./Rating/rating";

function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Accordion titleValue={"menu"} collapsed={true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff/>
            <Uncontrolledaccordion titleValue={"menu"} collapsed={true}/>
            <Uncontrolledaccordion titleValue={"users"} collapsed={false}/>
            <Unncontralledrating/>



        </div>
    );
}


export default App;
