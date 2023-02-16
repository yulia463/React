import React, {useState} from "react";
import Star from "../Star/star";

const Unncontralledrating = () => {

let [rating,setRating] = useState(0)

    return(
        <div>
            {/*<Star selected={rating > 0} />*/}
            {/*<Star selected={rating > 1} />*/}
            {/*<Star selected={rating > 2}/>*/}
            {/*<Star selected={rating > 3} />*/}
            {/*<Star selected={rating > 4} />*/}
        </div>
    )
}
export default Unncontralledrating;
