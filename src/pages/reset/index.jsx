import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Subtitle, Title } from 'components/text';

export default function Reset() {
  return (
    <Background>
      <Container>
        <Row>
          <Logo />
        </Row>
        <Row>
          <Navbar />
          <Form>
            <Subtitle>READY TO LAUNCH</Subtitle>
            <Title>Forgot password</Title>
            <Description>
              Please enter your email for verification code.
            </Description>
            <Input
              title="Verification Code"
              placeholder="Please enter verification code"
            />
            <Button variant="secondary">Back</Button>
            <Button>Confirm</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
