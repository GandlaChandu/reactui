import React, { useState } from "react";
import Team from "./team";
import Self from "./self";
import './dashboardlayout.scss';

function Layout() {
    const [tab, setTab] = useState('myteam')

    return (
        <div className="dashboardLayout">
            <div className="heading">
                <button
                    onClick={() => setTab("myteam")}
                    className={tab === 'myteam' ? 'myTeam focus' : 'myTeam'}>
                    My Team
                </button>
                <button
                    onClick={() => setTab("self")}
                    className={tab === 'self' ? 'selfTab focus' : 'selfTab'}>
                    Self
                </button>
                <button
                    className="activity">
                    + Log Today's Activity
                </button>
            </div>

            {tab === 'myteam' && (

                <Team />

            )}
            {tab === 'self' && (
                <>
                    <Self />
                </>
            )}
        </div>
    )

}
export default Layout;