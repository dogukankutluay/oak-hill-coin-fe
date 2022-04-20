import React from 'react';
import style from './team.module.scss';
import TeamBg from 'assets/icons/team/teams_bg.svg';
export default function Team() {
  return (
    <div className={style.team}>
      <div className={style.wrapper}>
        <div style={bg}></div>
        <h1 className={style.page_title}>Our Team</h1>
        <div className={style.animatedBtn}>
          <span className={style.btn_active}>TEAM</span>
          <span className={style.btn}>Advisor Board</span>
        </div>
        <div className={style.tree}>
          <div className={style.tree_body}>
            <div className={style.member}>
              <img
                src={require('./members/yildirim_bakir.png')}
                alt="yildirim_bakir"
              />
              <div>
                <p>Yıldırım BAKIR</p>
                <h1>CEO</h1>
              </div>
            </div>
          </div>
          <div className={style.tree_body}>
            <div className={style.member}>
              <img
                src={require('./members/yilmaz_bakir.png')}
                alt="yilmaz_bakir"
              />
              <div>
                <p>Yılmaz BAKIR</p>
                <h1>CTO</h1>
              </div>
            </div>
            <div className={style.member}>
              <img
                src={require('./members/abdulrahman_aleid.png')}
                alt="abdulrahman_aleid"
              />
              <div>
                <p>Abdulrahman Aleid</p>
                <h1>COO</h1>
              </div>
            </div>
          </div>
          <div className={style.tree_body}>
            <div className={style.member}>
              <img src={require('./members/hosni_emam.png')} alt="hosni_emam" />
              <div>
                <p>Hosni Emam</p>
              </div>
            </div>
            <div className={style.member}>
              <img
                src={require('./members/murat_birkent.png')}
                alt="murat_birkent"
              />
              <div>
                <p>Murat Birkent</p>
              </div>
            </div>
            <div className={style.member}>
              <img
                src={require('./members/milan_rapaic.png')}
                alt="milan_rapaic"
              />
              <div>
                <p>Milan Rapaic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const bg = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: `url(${TeamBg}) no-repeat`,
  zIndex: '-1',
  backgroundPosition: 'center',
  opacity: '0.2',
  backgroundSize: 'contain',
};
