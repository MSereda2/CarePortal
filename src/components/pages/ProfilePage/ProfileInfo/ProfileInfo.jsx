import React from 'react';
import style from './profileInfo.module.scss';

// Components
import ChangeAbleInput from '../../../common/change-input/change-input.componet';
import BtnMain from '../../../common/btn-main/BtnMain';

const ProfileInfo = ({isChangeAllowed,userData}) => {

  const onChangeInfo = (e) => {
    e.preventDefault();
    this.props.ChangeInfo(true)
  }

  return (
    <div className={style.profileInfo}>
      <div className={style.profileInfo__top}>
        <div className={style.profileInfo__content}>
          <div>
            <div className={style.profileInfo__content_img}>
              <img src={userData.photoURL} alt="" />
            </div>
            <div className={style.profileInfo__content_text}>
              <h4>{userData.displayName}</h4>
              <p>Krasnodar, Russian</p>
            </div>
          </div>  
          <p className={style.profileInfo__content_changeimg}>Изменить обои</p>
        </div>
   
      </div>
      <div className={style.formContainer}>
        <form className={style.form}>
          <div className={style.flexContainer}>
              <div className={style.form__left}>
                <ChangeAbleInput isChangeAllowed={isChangeAllowed} labelName='Имя' inputName={userData.displayName} />
                <ChangeAbleInput isChangeAllowed={isChangeAllowed} labelName='Почта' inputName={userData.email}/>
                <ChangeAbleInput isChangeAllowed={isChangeAllowed} labelName='Город' inputName='Краснодар'/>
              </div>
              <div className={style.form__right}>
                <ChangeAbleInput isChangeAllowed={isChangeAllowed} labelName='Фамилия' inputName={userData.displayName} />
                <ChangeAbleInput isChangeAllowed={isChangeAllowed} labelName='Телефон' inputName={userData.phoneNumber}/>
                <ChangeAbleInput isChangeAllowed={isChangeAllowed} labelName='Пол' inputName='Краснодар'/>
              </div>
          </div>
          <BtnMain text="Изменить данные" onChangeInfo={onChangeInfo}/>
        </form>
      </div>
    </div>
  )
}

export default ProfileInfo;
