import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Subtitle, Title } from 'components/text';
import languages from 'constants/routes/language';
import { useSelector } from 'react-redux';

export default function RegisterVerify() {
  const lang = useSelector(
    (state) => languages[state.preferences.lang]
  ).registerVerify;
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
              title={lang.verification}
              placeholder={lang.verificationHolder}
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
