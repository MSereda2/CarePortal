import React from 'react';
import style from './profilePage.module.scss';

// Components
import Sidebar from './Sidebar/Sidebar';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class ProfilePage extends React.Component {


  render() {
    return (
      <div className={style.profilePage}>
        <Sidebar />
        <div className={style.view}>
          <ProfileInfo />
        </div>
      </div>
    )
  }
}

export default ProfilePage;