import Background from 'components/background';
import Button from 'components/button';
import { Card, CardText, CardTitle } from 'components/card';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Checkbox, Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Subtitle, Title } from 'components/text';
import languages from 'constants/routes/language';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './register.module.scss';
export default function Register() {
  const lang = useSelector(
    (state) => languages[state.preferences.lang]
  ).register;
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
              {lang.description} <Link to={'/login'}>{lang.direct}</Link>
            </Description>
            <div className={style.inputs}>
              {' '}
              <Input
                title={lang.firstname}
                placeholder={lang.firstnameHolder}
              />{' '}
              <Input title={lang.lastname} placeholder={lang.lastnameHolder} />
            </div>

            <Input title={lang.mail} placeholder={lang.mailHolder} />
            <Input
              type="password"
              title={lang.password}
              placeholder={lang.passwordHolder}
            />
            <Input
              type="password"
              title={lang.passwordConfirm}
              placeholder={lang.passwordConfirmHolder}
            />
            <Checkbox title={lang.checkbox} />
            <Button variant="secondary">{lang.btnForgot}</Button>
            <Button>{lang.btnCreateAccount}</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
