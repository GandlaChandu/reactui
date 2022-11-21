import React from 'react'
import TeamActivity from './teamactivity.json'
import MyActivity from './myactivity.json'
function ActivityTable(props) {
    const JsonData = props.type === 'team' ? TeamActivity : MyActivity
    const tbody = JsonData.map(
        (info) => {
            let backgroundColor;
            const progress = info.progress
            if (progress === "Active") {
                backgroundColor = "#fcb50d"
            } else if (progress === "Inactive") {
                backgroundColor = "red"
            }
            else if (progress === "closed") {
                backgroundColor = "Green"
            }
            else {
                backgroundColor = "#1874ba"
            }
            return (
                <tr>
                    <td>{info['SI no']}</td>
                    <td><a href='#' className="Links">{info.Description}</a></td>
                    <td>{info['start Date']}</td>
                    <td>{info['End Date']}</td>
                    <td style={{ display: props.type === 'team' ? 'block' : 'none' }}>{info['Employee Name']}</td>
                    <td>{info['Assigned By']}</td>
                    <td  ><div className='Styling' style={{ backgroundColor }}></div></td>
                </tr>
            )
        }
    )
    return (
        <>
            <div>
                <table id='table'>
                    <thead>
                        <tr>
                            <th>SI no</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th style={{ display: props.type === 'team' ? 'block' : 'none' }}>Employee Name</th>
                            <th>Assigned By</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbody}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ActivityTable;