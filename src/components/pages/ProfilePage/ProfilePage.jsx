import React from 'react';
import style from './profilePage.module.scss';
import {connect} from 'react-redux';

// Components
import Sidebar from './Sidebar/Sidebar';
import ProfileInfo from './ProfileInfo/ProfileInfo';

// Selectors
import {getUserData} from '../../../redux/reducers/login/login_selectors';

// Actions
import {ChangeInfo} from '../../../redux/reducers/profile/profile_action';

class ProfilePage extends React.Component {

  onChangeInfo = (e) => {
    e.preventDefault();
    this.props.ChangeInfo(true)
  }

  render() {
    return (
      <div className={style.profilePage}>
          <Sidebar />
        <div className={style.view}>
          <ProfileInfo onChangeInfo={this.onChangeInfo} {...this.props} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    userData: getUserData(state),
    isChangeAllowed: state.profile.profileInfo.isChangeAllowed
})

export default connect(mapStateToProps, {ChangeInfo})(ProfilePage);