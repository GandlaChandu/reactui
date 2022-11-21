import React, { useState } from 'react';
import './viewactivityboard.scss';
import ActivityTable from './activitytable';
function ViewActivityBoard() {
  const [type, setType] = useState('team')
  return (
    <div className='activityboard'>
      <section className="content">
        <div className='style'>
          <span><button onClick={() => setType("team")} className={type === 'team' ? 'TeamButton Highlight' : 'TeamButton'} >
            Team Activity
          </button>
            <button onClick={() => setType("self")} className={type === 'self' ? 'SelfButton Highlight' : 'SelfButton'}>
              My Activity
            </button>
            <ActivityTable type={type} />
          </span>
        </div>
      </section>
    </div>
  )
}

export default ViewActivityBoard;