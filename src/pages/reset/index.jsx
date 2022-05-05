import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Info, Subtitle, Title } from 'components/text';
import languages from 'constants/language';
import useResponse from 'helpers/useResponse';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { auth } from 'requests';
const FORM_INITIAL = {
  email: '',
};
export default function Reset() {
  const lang = useSelector((state) => languages[state.preferences.lang]).reset;
  document.title = lang.pageTitle;
  const [form, setForm] = useState(FORM_INITIAL);
  const [response, setResponse, RESPONSE_INITIAL] = useResponse();
  const handleForm = async (e) => {
    e.preventDefault();
    setResponse(RESPONSE_INITIAL);
    try {
      const { data } = await auth.forgotPassword(form);
      setResponse({ success: data.success, message: data.message });
    } catch (error) {
      setResponse({
        success: false,
        message: error.response.data.message || 'An error occured',
      });
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
              name="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
            <Info success={response.success}>{response.message}</Info>
            <Button variant="secondary" to={'/login'}>
              {lang.btnBack}
            </Button>
            <Button onClick={handleForm}>{lang.btnConfirm}</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
