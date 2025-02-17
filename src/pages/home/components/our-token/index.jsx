import style from './token.module.scss';
import { default as cn } from 'classnames';
import { LeafLeftRotated, LeafRightRotated } from 'assets/icons/our-token';
export default function OurToken({ reference, tab, scroll }) {
  const animate = tab === 'our-token';

  return (
    <div
      className={style.token}
      id="our-token"
      ref={reference}
      style={{
        background:
          scroll + window.innerHeight / 1.5 > reference?.current?.offsetTop
            ? 'white'
            : '#205147',
        transition: 'background 0.7s ease',
        WebkitTransition: 'all 1s ease',
        MozTransition: 'all 1s ease',
      }}
    >
      {/* <div

      className=  {
        scroll + window.innerHeight / 1.5 > reference?.current?.offsetTop
          ? style.bg_light
          : style.bg_dark
      }
      ></div> */}
      <LeafLeftRotated
        className={cn(
          style.token_leftLeaf,
          animate && 'animate__animated animate__slideInLeft delay-100'
        )}
      />
      <LeafRightRotated
        className={cn(
          style.token_rightLeaf,
          animate && 'animate__animated animate__slideInRight delay-100'
        )}
      />
      <div className={style.token_wrapper}>
        <h1
          className={cn(
            style.title,
            animate && 'animate__animated animate__fadeInDown delay-150'
          )}
        >
          Our Token
        </h1>
        <h2
          className={cn(
            style.subtitle,
            animate && 'animate__animated animate__fadeInUp delay-200'
          )}
        >
          What is Oak Hill Coin?
        </h2>
        <p
          className={animate && 'animate__animated animate__fadeInUp delay-300'}
        >
          Oak Hill Coin is the world's first blockchain-based investment
          platform’s cryptocurrency.
        </p>

        <section className={style.token_infos}>
          <h1
            className={animate && 'animate__animated animate__fadeIn delay-400'}
          >
            100M <span>Tokens</span>{' '}
          </h1>
          <h1
            className={animate && 'animate__animated animate__fadeIn delay-450'}
          >
            100M <span>Shares</span>{' '}
          </h1>
          <h1
            className={animate && 'animate__animated animate__fadeIn delay-500'}
          >
            100M <span>NFTs</span>{' '}
          </h1>
        </section>
        <p
          className={cn(
            style.token_description,
            animate && 'animate__animated animate__fadeInUp delay-600'
          )}
        >
          The simplest way to make a real investment It is Real Digital Asset
        </p>
      </div>
    </div>
  );
}
