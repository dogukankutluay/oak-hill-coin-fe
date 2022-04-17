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
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import languages from 'constants/routes/language';
export default function Login() {
  const lang = useSelector((state) => languages[state.preferences.lang]).login;
  document.title = lang.pageTitle;
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
            <Input title={lang.mail} placeholder={lang.mailHolder} />
            <Input
              type="password"
              title={lang.password}
              placeholder={lang.passwordHolder}
            />
            <Checkbox title={lang.checkbox} />
            <Button variant="secondary">{lang.btnForgot}</Button>
            <Button>{lang.btnSignin}</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
