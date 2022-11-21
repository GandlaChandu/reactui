import React from 'react';
import './activityboard.scss';
import ActivityDetails from "./activity-view-details"
import SelfReminder from '../self-reminder/self-reminder';

function ActivityBoard() {
  return (
    <div className='activityboard'>
      <section className="content">
        <ActivityDetails />
        Activity Board.
        <SelfReminder />
      </section>
    </div>
  )
}

export default ActivityBoard;
