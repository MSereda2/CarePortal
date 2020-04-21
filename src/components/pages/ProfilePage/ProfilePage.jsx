import React from 'react';
import style from './profilePage.module.scss';

// Components
import Sidebar from './Sidebar/Sidebar';

class ProfilePage extends React.Component {

  
  render() {
    return(
      <div className={style.profilePage}>
          <Sidebar />
          <div className={style.view}>
            <div className={style.profileInfo}>
                <div className={style.profileInfo__top}>
                  <div className={style.profileImg}>
                    <img src="#" alt=""/>
                  </div>
                  <div className={style.profileInfo__text}>
                    <h4>Misha Sereda</h4>
                    <p>Krasnodar, Russian</p>
                  </div>
                </div>
                <div className={style.profileInfo__form}>
                  <form>
                    <div className={style.profileInfo__form_left}>
                        <div className={style.profileInfo__form_input}>
                          <label>name</label>
                          <input type="text" placeholder="Введите ваше имя" />
                        </div>
                        <div className={style.profileInfo__form_input}>
                          <label>Email adress</label>
                          <input type="text" placeholder="Введите ваше адресс" />
                        </div>
                        <div className={style.profileInfo__form_input}>
                          <label>Location</label>
                          <input type="text" placeholder="Введите ваше местоположения" />
                        </div>
                    </div>
                    <div className={style.profileInfo__form_right}>
                        <div className={style.profileInfo__form_input}>
                            <label>Full name</label>
                            <input type="text" placeholder="Введите ваше фамилия " />
                        </div>
                        <div className={style.profileInfo__form_input}>
                            <label>Number</label>
                            <input type="text" placeholder="Введите ваше телефон " />
                        </div>
                        <div className={style.profileInfo__form_input}>
                            <label>Full name</label>
                            <input type="text" placeholder="Введите ваше дата рождения " />
                        </div>
                      </div>
                  </form>
                  <button className={style.profileInfo__btn}>Сохранить форму</button>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ProfilePage;