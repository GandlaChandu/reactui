import React from "react";
import SelectOption from "./select";
import ActivityPerformance from "../activity-performance/activityperformance";
function Team(){
   
    return(
        <>
        <div className="box">
                        <div className="dropdown">
                            <SelectOption/>
                            <div className="icon">
                                <span className="material-symbols-outlined">
                                    calendar_today
                                    </span>
                            </div>
                        </div>
                    </div>
                        <ActivityPerformance /> 

        </>
    )
}
export default Team;
