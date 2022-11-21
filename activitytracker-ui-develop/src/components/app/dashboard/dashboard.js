import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './dashboard.scss';
import { getUsers } from '../../../reducers/dashboard/dashboard';
import Layout from './dashboardlayout/dashboardlayout';


function Dashboard() {

  const dispatch = useDispatch();
  const storeUsers = useSelector(({ dashboard}) => dashboard.users);


  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className='dashboard'>
        <section className="content">
          {/* Dashboard. */}
          <Layout/>
      </section>
    </div>
  )
}

export default Dashboard;