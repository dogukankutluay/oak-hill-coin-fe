import React, { useState } from 'react';
import style from './team.module.scss';
import TeamBg from 'assets/icons/team/teams_bg.svg';
import { default as cn } from 'classnames';
export default function Team({ reference, tab }) {
  const [team, setTeam] = useState(true);
  const animated = tab === 'team';

  return (
    <div className={style.team} id="team" ref={reference}>
      <div className={style.wrapper}>
        <div style={bg}></div>
        <h1
          className={cn(
            style.page_title,
            animated && 'animate__animated animate__fadeInDown'
          )}
        >
          Our Team
        </h1>
        <div
          className={cn(
            style.animatedBtn,
            animated && 'animate__animated animate__fadeInDown delay-50'
          )}
        >
          <span
            className={team ? style.btn_active : style.btn}
            onClick={() => setTeam(true)}
          >
            TEAM
          </span>
          <span
            className={!team ? style.btn_active : style.btn}
            onClick={() => setTeam(false)}
          >
            Advisor Board
          </span>
        </div>
        {team ? <TeamMembers animated={animated} /> : <Advisors />}
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

const TeamMembers = () => {
  let animated = true;
  return (
    <div className={cn(style.tree)}>
      <div
        className={cn(
          style.tree_body,
          animated && 'animate__animated animate__fadeIn'
        )}
      >
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
      <div
        className={cn(
          style.tree_body,
          animated && 'animate__animated animate__fadeIn delay-100'
        )}
      >
        <div className={style.member}>
          <img src={require('./members/yilmaz_bakir.png')} alt="yilmaz_bakir" />
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
      <div
        className={cn(
          style.tree_body,
          animated && 'animate__animated animate__fadeIn delay-200'
        )}
      >
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
          <img src={require('./members/milan_rapaic.png')} alt="milan_rapaic" />
          <div>
            <p>Milan Rapaic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Advisors = () => {
  return (
    <div className={style.tree}>
      <div className={cn(style.tree_body, 'animate__animated animate__fadeIn')}>
        <div className={style.member}>
          <img src={require('./members/Mr-Feihu-Yu 1.png')} alt="feihu_yu" />
          <div>
            <p>Feihu Yu</p>
          </div>
        </div>
        <div className={style.member}>
          <img
            src={require('./members/Mr-Ubeyd-Korbey 1.png')}
            alt="ubeyd_korbey"
          />
          <div>
            <p>Ubeyd Korbey</p>
          </div>
        </div>
        <div className={style.member}>
          <img
            src={require('./members/Mr-Ivan-Radonjic 1.png')}
            alt="ivan_radonjic"
          />
          <div>
            <p>Ivan Radonjic</p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          style.tree_body,
          'animate__animated animate__fadeIn delay-100'
        )}
      >
        <div className={style.member}>
          <img src={require('./members/Goran-Kazic 1.png')} alt="goran_kazic" />
          <div>
            <p>Goran Kazic</p>
          </div>
        </div>
        <div className={style.member}>
          <img
            src={require('./members/Mr-Iskender-Mor-CyprusRB-2 1.png')}
            alt="iskender_mor"
          />
          <div>
            <p>İskender Mor</p>
          </div>
        </div>
        <div className={style.member}>
          <img
            src={require('./members/Mr-Jeroen-Rijnenberg-1 1.png')}
            alt="jeroen_rijnenberg"
          />
          <div>
            <p>Jeroen Rijnenberg</p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          style.tree_body,
          'animate__animated animate__fadeIn delay-200'
        )}
      >
        <div className={style.member}>
          <img
            src={require('./members/Ahmed Ramadan 1.png')}
            alt="ahmet_ramadan"
          />
          <div>
            <p>Ahmet Ramadan</p>
          </div>
        </div>
      </div>
    </div>
  );
};
