import React from 'react';
import style from './profileInfo.module.scss';

// Components
import ChangeAbleInput from '../../../common/ChangeAbleInput/ChangeAbleInput';
import BtnMain from '../../../common/BtnMain/BtnMain';

const ProfileInfo = ({isChangeAllowed,onChangeInfo,userData}) => {

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
          <BtnMain onChangeInfo={onChangeInfo}/>
        </form>
      </div>
    </div>
  )
}

export default ProfileInfo;


// <div className={style.profileInfo__formContainer}>
// <form className={style.profileInfo__form}>
//   <div className={style.profileInfo__form_left}>
//     <div className={style.profileInfo__form_input}>
//       <label>name</label>
//       <input type="text" placeholder="Введите ваше имя" />
//     </div>
//     <div className={style.profileInfo__form_input}>
//       <label>Email adress</label>
//       <input type="text" placeholder="Введите ваше адресс" />
//     </div>
//     <div className={style.profileInfo__form_input}>
//       <label>Location</label>
//       <input type="text" placeholder="Введите ваше местоположения" />
//     </div>
//   </div>
//   <div className={style.profileInfo__form_right}>
//     <div className={style.profileInfo__form_input}>
//       <label>Full name</label>
//       <input type="text" placeholder="Введите ваше фамилия " />
//     </div>
//     <div className={style.profileInfo__form_input}>
//       <label>Number</label>
//       <input type="text" placeholder="Введите ваше телефон " />
//     </div>
//     <div className={style.profileInfo__form_input}>
//       <label>Full name</label>
//       <input type="text" placeholder="Введите ваше дата рождения " />
//     </div>
//   </div>
//   <button className={style.profileInfo__btn}>Сохранить форму</button>
// </form>
// </div>