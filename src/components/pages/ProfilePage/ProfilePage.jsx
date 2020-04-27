import React from 'react';
import style from './profilePage.module.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Route, useRouteMatch
} from 'react-router-dom';

// Components
import Sidebar from './Sidebar/Sidebar';
import ProfileInfo from './ProfileInfo/ProfileInfo';

// Selectors
import { getUserData } from '../../../redux/reducers/login/login_selectors';

// Actions
import { ChangeInfo } from '../../../redux/reducers/profile/profile_action';

import { withAuthRedirect } from '../../HOC/withAuthRedirect';

const ProfilePage = (props) => {

  let { path, url } = useRouteMatch();

  return (
    <div className={style.profilePage}>
      <Sidebar url={url} />
      <div className={style.view}>
        <Route exact path={path} render={() => <ProfileInfo {...props} />} />
        
        <Route path={`${path}/tasks`} render={() => <h1>hey</h1>} />
        <Route path={`${path}/dialogs`} render={() => <h1>dialogs</h1>} />

      
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userData: getUserData(state),
  isChangeAllowed: state.profile.profileInfo.isChangeAllowed
})

export default compose(
  connect(mapStateToProps, { ChangeInfo }),
  withAuthRedirect
)(ProfilePage);