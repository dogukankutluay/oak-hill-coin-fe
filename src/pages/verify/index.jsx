import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Info, Subtitle, Title } from 'components/text';
import languages from 'constants/language';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { auth } from './../../requests/index';

export default function Verify() {
  const lang = useSelector((state) => languages[state.preferences.lang]).verify;
  document.title = lang.pageTitle;
  const verifyType = useParams().type;
  const [code, setCode] = useState('');
  const phone = useSelector((state) => state.user.userInfo.phone);
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const submit = async (e) => {
    e.preventDefault();
    if (verifyType === 'register') {
      try {
        const { data } = await auth.confirmRegister({ code, phone });
        setResponse(data);
        navigate('/register-success');
      } catch (error) {
        setResponse(error.response?.data);
      }
    }
  };
  return (
    <Background>
      <Container>
        <Row>
          <Logo />
        </Row>
        <Row>
          <Navbar />
          <Form>
            <Subtitle>{lang.subtitle}</Subtitle>
            <Title>{lang.title}</Title>
            <Description>{lang.description}</Description>
            <Input
              title={lang.verification}
              placeholder={lang.verificationHolder}
              onChange={(e) => setCode(e.target.value)}
            />
            <Info success={response?.success}>{response?.message}</Info>
            <Button variant="secondary" to={'/register'}>
              {lang.btnBack}
            </Button>
            <Button onClick={submit}>{lang.btnConfirm}</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
