import React,{Fragment} from "react";

import AvailableMeal from "./AvailableMeal";
import MealsSummary from "./MealSummary";

const Meal = () => {
    return <Fragment>
     <MealsSummary/>
        <AvailableMeal/>
       
        </Fragment>
}
export default Meal;