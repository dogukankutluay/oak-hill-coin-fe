import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Title } from 'components/text';
import languages from 'constants/routes/language';
import { useSelector } from 'react-redux';
export default function RegisterSuccess() {
  const lang = useSelector(
    (state) => languages[state.preferences.lang]
  ).registerSuccess;
  document.title = lang.pageTitle;
  return (
    <Background>
      <Container>
        <Row>
          <Logo />
        </Row>
        <Row>
          <Navbar />
          <svg
            width="435"
            height="409"
            viewBox="0 0 435 409"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M407.23 192.21L178.063 60.5396L407.23 192.21Z"
                fill="#C4FFD8"
              />
              <path
                d="M407.23 192.21L178.063 60.5396L407.23 192.21Z"
                fill="#C4FFD8"
              />
              <path
                d="M407.23 192.21L178.063 60.5396"
                stroke="#C3FFD8"
                stroke-width="40"
                stroke-linecap="round"
              />
            </g>
            <g opacity="0.5">
              <path
                d="M352.719 278.57L123.553 146.9L352.719 278.57Z"
                fill="#C4FFD8"
              />
              <path
                d="M352.719 278.57L123.553 146.9L352.719 278.57Z"
                fill="#C4FFD8"
              />
              <path
                d="M352.719 278.57L123.553 146.9"
                stroke="#C3FFD8"
                stroke-width="40"
                stroke-linecap="round"
              />
            </g>
            <g opacity="0.5">
              <path
                d="M64.8516 113.812L46.9911 103.415L64.8516 113.812Z"
                fill="#C4FFD8"
              />
              <path
                d="M64.8516 113.812L46.9911 103.415L64.8516 113.812Z"
                fill="#C4FFD8"
              />
              <path
                d="M64.8516 113.812L46.9911 103.415"
                stroke="#C3FFD8"
                stroke-width="92.0138"
                stroke-linecap="round"
              />
            </g>
            <g opacity="0.5">
              <path
                d="M271.871 349.618L97.8283 247.96L271.871 349.618Z"
                fill="#C4FFD8"
              />
              <path
                d="M271.871 349.618L97.8283 247.96L271.871 349.618Z"
                fill="#C4FFD8"
              />
              <path
                d="M271.871 349.618L97.8283 247.96"
                stroke="#C3FFD8"
                stroke-width="40"
                stroke-linecap="round"
              />
            </g>
            <path
              d="M55.2451 257.859C52.4579 258.151 50.4323 260.652 50.7246 263.439C51.017 266.226 53.5174 268.252 56.3047 267.96C59.0919 267.667 61.1176 265.167 60.8252 262.38C60.5328 259.592 58.0324 257.567 55.2451 257.859Z"
              fill="#C4FFD8"
              stroke="#C3FFD8"
              stroke-width="4.28355"
            />
            <path
              d="M351.486 361.297C346.903 361.778 343.572 365.889 344.053 370.473C344.533 375.056 348.645 378.387 353.229 377.907C357.812 377.426 361.143 373.314 360.662 368.731C360.181 364.147 356.07 360.816 351.486 361.297Z"
              fill="#C4FFD8"
              stroke="#C3FFD8"
              stroke-width="7.044"
            />
            <path
              d="M234.467 19.004C229.883 19.4848 226.552 23.5965 227.033 28.18C227.514 32.7634 231.626 36.0944 236.209 35.6136C240.792 35.1328 244.123 31.0211 243.643 26.4376C243.162 21.8542 239.05 18.5232 234.467 19.004Z"
              fill="#C4FFD8"
              stroke="#C3FFD8"
              stroke-width="7.044"
            />
            <path
              d="M427.89 127.749C425.785 127.749 424.075 129.458 424.075 131.564C424.075 133.669 425.785 135.379 427.89 135.379C429.995 135.379 431.705 133.669 431.705 131.564C431.705 129.458 429.995 127.749 427.89 127.749Z"
              fill="#C4FFD8"
              stroke="#C3FFD8"
              stroke-width="5.14888"
            />
            <path
              d="M131.593 376.523C129.488 376.523 127.778 378.233 127.778 380.338C127.778 382.444 129.488 384.153 131.593 384.153C133.699 384.153 135.408 382.444 135.408 380.338C135.408 378.233 133.699 376.523 131.593 376.523Z"
              fill="#C4FFD8"
              stroke="#C3FFD8"
              stroke-width="5.14888"
            />
            <g opacity="0.999995">
              <path
                d="M88.1965 17.781L83.5845 3.18002L88.1965 17.781Z"
                fill="#C4FFD8"
              />
              <path
                d="M88.1965 17.781L83.5845 3.18002"
                stroke="#C3FFD8"
                stroke-width="3"
              />
              <path
                d="M92.9504 8.28247L78.3495 12.8945L92.9504 8.28247Z"
                fill="#C4FFD8"
              />
              <path
                d="M92.9504 8.28247L78.3495 12.8945"
                stroke="#C3FFD8"
                stroke-width="3"
              />
            </g>
            <path
              d="M412.554 267.751L408.462 252.996L412.554 267.751Z"
              fill="#C4FFD8"
            />
            <path
              d="M412.554 267.751L408.462 252.996"
              stroke="#C3FFD8"
              stroke-width="3"
            />
            <path
              d="M417.641 258.427L402.886 262.52L417.641 258.427Z"
              fill="#C4FFD8"
            />
            <path
              d="M417.641 258.427L402.886 262.52"
              stroke="#C3FFD8"
              stroke-width="3"
            />
            <path
              d="M94.2805 334L90.9821 319.047L94.2805 334Z"
              fill="#C4FFD8"
            />
            <path
              d="M94.2805 334L90.9821 319.047"
              stroke="#C3FFD8"
              stroke-width="3"
            />
            <path
              d="M99.8582 324.96L84.9056 328.259L99.8582 324.96Z"
              fill="#C4FFD8"
            />
            <path
              d="M99.8582 324.96L84.9056 328.259"
              stroke="#C3FFD8"
              stroke-width="3"
            />
            <path
              d="M227.42 83.2703C288.18 83.2703 337.513 132.603 337.513 193.364C337.513 254.125 288.18 303.457 227.42 303.457C166.659 303.457 117.326 254.125 117.326 193.364C117.326 132.603 166.659 83.2703 227.42 83.2703Z"
              fill="white"
            />
            <path
              d="M227.352 93.6829C282.366 93.6829 327.033 138.35 327.033 193.364C327.033 248.378 282.366 293.046 227.352 293.046C172.337 293.046 127.67 248.378 127.67 193.364C127.67 138.35 172.337 93.6829 227.352 93.6829Z"
              fill="#2F7646"
            />
            <path
              d="M182.334 197.02L209.283 223.356L272.369 160.271"
              stroke="white"
              stroke-width="18"
            />
          </svg>
          <Title align="center">{lang.title}</Title>
          <Description align="center">{lang.description}</Description>
          <Button>{lang.btnContinue}</Button>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
