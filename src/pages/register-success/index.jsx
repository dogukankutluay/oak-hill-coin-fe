import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Title } from 'components/text';
import languages from 'constants/language';
import { useDispatch, useSelector } from 'react-redux';
import LottieCheckRegister from 'assets/animations/register-success/CheckRegister';
import Lottie from 'lottie-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from 'requests';
import { login } from 'redux/actions/userAction';

export default function RegisterSuccess() {
  const [urlSearch] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useSelector(
    (state) => languages[state.preferences.lang]
  ).registerSuccess;
  document.title = lang.pageTitle;
  const confirmEmail = async () => {
    try {
      const confirmEmailToken = urlSearch.get('confirmEmailToken');
      const { data } = await auth.confirmEmail({
        params: { confirmEmailToken },
      });
      dispatch(login({ token: data.token }));
    } catch (error) {
      console.log(error.response);
    }
  };
  const direct = () => {
    navigate('/');
  };
  useEffect(() => {
    confirmEmail();
  }, []);
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
            {...checkRegisterOptions}
          />
          <Title align="center">{lang.title}</Title>
          <Description align="center">{lang.description}</Description>
          <Button onClick={direct}>{lang.btnContinue}</Button>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
const checkRegisterOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieCheckRegister,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
