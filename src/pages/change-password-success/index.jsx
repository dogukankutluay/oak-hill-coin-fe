import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Title } from 'components/text';
import languages from 'constants/routes/language';
import { useSelector } from 'react-redux';
import PasswordLock from 'assets/animations/PasswordLock';
import Lottie from 'lottie-react';
export default function ChangePasswordSuccess() {
  const lang = useSelector(
    (state) => languages[state.preferences.lang]
  ).changePasswordSuccess;
  document.title = lang.pageTitle;
  return (
    <Background>
      <Container>
        <Row>
          <Logo />
        </Row>
        <Row>
          <Navbar />
          <Lottie
            className="animate__animated animate__fadeIn delay-200"
            {...passwordLockOptions}
          />

          <Title align="center">{lang.title}</Title>
          <Description align="center">{lang.description}</Description>
          <Button>{lang.btnContinue}</Button>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}

const passwordLockOptions = {
  loop: true,
  autoplay: true,
  animationData: PasswordLock,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
