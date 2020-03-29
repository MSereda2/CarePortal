
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userImg} from '../../../assets/userEmpty.png';

import CircleImg from '../../common/circleImg/CircleImg';

// Firebase
import { auth } from '../../../api/firebase/firebase.utils';

// Components
import CreateTask from '../../CreateTask/CreateTask';

export default function SimpleMenu(props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CreateTask/>
      
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <CircleImg  img={props.profileImg ? props.profileImg : require('../../../assets/userEmpty.png')} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Профиль</MenuItem>
        <MenuItem onClick={handleClose}>Мои сообщения</MenuItem>
        <MenuItem onClick={() => auth.signOut()}>Выйти</MenuItem>
      </Menu>
    </div>
  );
}