import React from 'react';
import '../App.css';
import AppTitle from "./title";
import Accordion from "./Accordion/accordion";
import Rating from "./Rating/rating";



function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}



export default App;
