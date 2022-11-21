import React from 'react';
import './style.css';
const ActivityDetails = () => {
    return (
        <div>
            <span className="material-symbols-outlined back">arrow_back</span>
            <div className="activity">
                <h3 >Activity details</h3>
                <table>
                    <tr>
                        <td>Description</td>
                        <td>Java basics on skillshare </td>
                        <td>Assigned by</td>
                        <td>Ron Erickson</td>
                    </tr>
                    <tr>
                        <td>Start Date</td>
                        <td>22/11/2022</td>
                        <td>End Date</td>
                        <td>22/03/2023</td>
                    </tr>
                </table>
            </div>
            <div className="details">
                <span>Activity Progress details</span>
            </div>
            <div className="buttons">
                <select >
                    <option>Current Week</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                </select>
                <button >
                    <span className="material-symbols-outlined">file_download</span>
                </button>
            </div>
        </div>
    )
}
export default ActivityDetails
