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
import style from 'assets/styles/global.module.scss';
export default function Register() {
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
              Already a member? <Link to={'/login'}>Log In</Link>
            </Description>
            <div className={style.inputs}>
              {' '}
              <Input
                title="Firstname"
                placeholder="Enter your firstname"
              />{' '}
              <Input title="Lastname" placeholder="Enter your lastname" />
            </div>

            <Input title="E-mail" placeholder="Email address" />
            <Input type="password" title="Password" placeholder="Password" />
            <Input
              type="password"
              title="Re-enter password"
              placeholder="Re enter password"
            />
            <Checkbox title="I have aggreed terms associated to Oakhill Coin" />
            <Button variant="secondary">Forgot password</Button>
            <Button>Create account</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
