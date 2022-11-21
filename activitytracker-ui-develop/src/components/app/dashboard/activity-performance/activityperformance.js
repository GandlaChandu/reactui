import PerformanceBar from './performancebar';
import { Activitystatus } from './performancebar';
import './activityperformance.scss';



const ActivityPerformance = () => {
    return (
        <>
            <div id='activityPerformanceLayout'>
                <span><h3 id='dashboardSummaryHeading'><b> Team Activity Performance </b></h3> <p id='activityStatus'>{Activitystatus}</p></span>
                <div id='performanceBar'>
                    <PerformanceBar />
                </div>
                <div id="summaryGrid">
                    <table id='summaryTable' cellSpacing="0">
                        <thead>
                            <tr id='tableHeader' className='totalActivity'>
                                <th>Total Activities</th>
                                <th><a href="#">100</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='activityDetail'>
                                <td>On Track</td>
                                <td className='numberLink'><a href="#">50</a></td>
                            </tr>
                            <tr className='activityDetail'>
                                <td>Delay</td>
                                <td className='numberLink'><a href="#">15</a></td>
                            </tr>
                            <tr className='activityDetail'>
                                <td>Critical</td>
                                <td className='numberLink'><a href="#">15</a></td>
                            </tr>
                            <tr className='activityDetail'>
                                <td>Not Accepted</td>
                                <td className='numberLink'><a href="#">20</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id='summaryFooter'>
                    <footer>*On Track&#62;= 80 %   &#160;&#160;   Delay &#62;=40 % &#60;80%   &#160;&#160;   Fallen back &#60; 40%</footer>
                </div>
            </div>
        </>
    )
}

export default ActivityPerformance;