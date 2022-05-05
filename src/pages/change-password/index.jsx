import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Subtitle, Title } from 'components/text';
import { useSelector } from 'react-redux';
import languages from 'constants/language';

export default function ChangePassword() {
  const lang = useSelector(
    (state) => languages[state.preferences.lang]
  ).changePassword;
  document.title = lang.pageTitle;
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
              type={'password'}
              title={lang.password}
              placeholder={lang.passwordHolder}
            />
            <Input
              type="password"
              title={lang.passwordConfirm}
              placeholder={lang.passwordConfirmHolder}
            />
            <Button variant="secondary">{lang.btnBack}</Button>
            <Button>{lang.btnConfirm}</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
