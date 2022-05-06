import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Info, Subtitle, Title } from 'components/text';
import { useSelector } from 'react-redux';
import languages from 'constants/language';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { auth } from 'requests';
import { useState } from 'react';

const FORM = {
  password: '',
  passwordConfirm: '',
  code: '',
};
export default function ChangePassword() {
  const lang = useSelector(
    (state) => languages[state.preferences.lang]
  ).changePassword;
  document.title = lang.pageTitle;
  const [urlSearch] = useSearchParams();

  const [form, setForm] = useState(FORM);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.passwordConfirm) {
      return setResponse({ message: 'Passwords did not match!' });
    }
    try {
      const code = urlSearch.get('code');
      const { data } = await auth.resetPassword({
        data: { code, password: form.password },
      });
      if (data.success) {
        navigate('/login');
      }
      setResponse(data);
    } catch (error) {
      setResponse({
        success: false,
        message: error.response?.data?.message || 'An error occured',
      });
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
              name="password"
              type={'password'}
              title={lang.password}
              placeholder={lang.passwordHolder}
              value={form.password}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="passwordConfirm"
              title={lang.passwordConfirm}
              placeholder={lang.passwordConfirmHolder}
              value={form.passwordConfirm}
              onChange={handleChange}
            />
            <Info success={response?.success}>{response?.message}</Info>
            <Button variant="secondary" to="/login">
              {lang.btnBack}
            </Button>
            <Button onClick={handleSubmit}> {lang.btnConfirm}</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
