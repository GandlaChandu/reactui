import React from "react";
import './self-reminder.scss';
import periodFrequency from "./periodEnum";


const selfReminder = () => {
    const periodicData = [Object.keys(periodFrequency).map((period) =>
        <option key={period}>{period}</option>
    )]
    const hours = [];
    for (var i = 1; i <= 12; i++) {
        hours.push(i)
    }
    const listHours = hours.map((i) =>
        <option key={i}>{i}</option>
    );

    const minutes = [];
    for (var j = 1; j < 60; j++) {
        minutes.push(j)
    }
    const listMinutes = minutes.map((j) =>
        <option >{j}</option>
    );
    return (
        <>
            <form id="mainSection">
                <span id="heading">Self Reminder Frequency</span>
                <div>
                    <select className="field">
                        {periodicData}
                    </select>

                    <input list="manualHour" className="fieldTime" type={"number"} placeholder="Hr"></input>
                    <datalist id="manualHour" maxlength="2" className="field">
                        {listHours}
                    </datalist>
                    <span className="colon"> : </span>
                    <input list="manualMinute" className="fieldTime" type={"number"} placeholder="Min"></input>
                    <datalist id="manualMinute" className="field">
                        {listMinutes}
                    </datalist>

                    <select id="meridiem" className="field">
                        <option> AM </option>
                        <option> PM </option>
                    </select>
                </div>
            </form>
        </>
    )
}
export default selfReminder;
