import Background from 'components/background';
import Button from 'components/button';
import { Card, CardText, CardTitle } from 'components/card';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Checkbox, Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Info, Subtitle, Title } from 'components/text';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import languages from 'constants/language';
import { auth } from 'requests';
import useResponse from 'helpers/useResponse';
import ReCAPTCHA from 'react-google-recaptcha';
import Splash from 'components/splash';
import { login } from 'redux/actions/userAction';
const FORM_INITIAL = {
  email: '',
  password: '',
};
export default function Login() {
  const lang = useSelector((state) => languages[state.preferences.lang]).login;
  document.title = lang.pageTitle;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(FORM_INITIAL);
  const [captcha, setCaptcha] = useState(false);
  const [response, setResponse, RESPONSE_INITIAL] = useResponse();
  const [splash, setSplash] = useState(true);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!captcha) {
      setResponse({
        success: false,
        message: 'please verify you are not a robot',
      });
      return 0;
    }
    setResponse(RESPONSE_INITIAL);
    try {
      const { data } = await auth.login(form);
      setResponse({
        ...response,
        success: data.success,
        message: data.message,
      });
      if (data.success) {
        dispatch(login({ token: data.token }));
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    } catch (error) {
      setResponse({
        ...response,
        success: false,
        message: error.response?.data?.message || 'an error occured',
      });
      if (error?.response?.data?.message === 'email not confirmed') {
        try {
          const res = await auth.emailSendAgain({
            data: { email: form.email },
          });
          navigate('/verify/register');
        } catch (er) {
          setResponse(er.response?.data);
        }
      }
    }
  };

  const handleValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCaptcha = (value) => {
    if (value) {
      setCaptcha(true);
    }
  };

  if (splash) {
    return <Splash setSplash={setSplash} />;
  }
  return (
    <Background>
      <Container>
        <Row>
          <Logo />
          <Card>
            <CardTitle>{lang.cardTitle}</CardTitle>
            <CardText>{lang.cardBody}</CardText>
          </Card>
        </Row>

        <Row>
          <Navbar />
          <Form>
            <Subtitle>{lang.subtitle}</Subtitle>
            <Title>{lang.title}</Title>
            <Description>
              {lang.description}
              <Link to={'/register'}>{lang.direct} </Link>{' '}
            </Description>
            <Input
              title={lang.mail}
              placeholder={lang.mailHolder}
              name="email"
              value={form.email}
              onChange={handleValue}
            />
            <Input
              type="password"
              title={lang.password}
              placeholder={lang.passwordHolder}
              name="password"
              value={form.password}
              onChange={handleValue}
            />
            <Checkbox title={lang.checkbox} />
            <ReCAPTCHA
              onChange={handleCaptcha}
              // sitekey="6Levxs8fAAAAACzVBbp6cJIO08FYvpm-z2DbOICk"
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              //test
              className="animate__animated animate__fadeIn delay-350"
            />

            <Info success={response.success}>{response.message}</Info>
            <Button variant="secondary" to={'/reset'}>
              {lang.btnForgot}
            </Button>
            <Button onClick={handleLogin}>{lang.btnSignin}</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
