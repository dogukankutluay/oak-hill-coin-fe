import Background from 'components/background';
import Button from 'components/button';
import { Card, CardText, CardTitle } from 'components/card';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Checkbox, Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Subtitle, Title } from 'components/text';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Background>
      <Container>
        <Row>
          <Logo />
          <Card>
            <CardTitle>Welcome</CardTitle>
            <CardText>
              “One of our objectives is represented by the alternative asset
              management, therefore the entire group offers investment solutions
              well-tailored to your needs and wishes.”
            </CardText>
          </Card>
        </Row>

        <Row>
          <Navbar />
          <Form>
            <Subtitle>READY TO LAUNCH</Subtitle>
            <Title>Please Log in your account.</Title>
            <Description>
              Not a member<Link to={'/register'}>Sign up </Link>{' '}
            </Description>
            <Input title="E-mail" placeholder="Email address" />
            <Input type="password" title="Password" placeholder="Password" />
            <Checkbox title="Remember me" />
            <Button variant="secondary">Forgot password</Button>
            <Button>Sign in</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
