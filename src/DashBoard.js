import React from 'react';
import { getUser, removeUserSession } from './utils/Common';
import {Redirect} from 'react-router-dom';

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
  }
  if(!user) {
      const {location} = props;
      return <Redirect 
          to={{
              pathname : '/login',
              state : {
                  from : location
              }
          }}
      />
  }else {
    return (
        <div>
          Welcome {user.username}!<br /><br />
          <p>UserName : {user.username} </p>
          <p>ID : {user._id} </p>
          <form>
            <button type="submit" onClick={handleLogout}>
                LogOut
            </button>
          </form>
        </div>
      );
  }
}

export default Dashboard;
