import Background from 'components/background';
import Button from 'components/button';
import { Card, CardText, CardTitle } from 'components/card';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Form, { Checkbox, Input } from 'components/form';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Info, Subtitle, Title } from 'components/text';
import languages from 'constants/language';
import useResponse from 'helpers/useResponse';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from 'requests';
import style from './register.module.scss';
const FORM_INITIAL = {
  name: '',
  surname: '',
  phone: '',
  email: '',
  password: '',
  passwordVerify: '',
  walletNo: '',
};
export default function Register() {
  const lang = useSelector(
    (state) => languages[state.preferences.lang]
  ).register;
  document.title = lang.pageTitle;
  const [form, setForm] = useState(FORM_INITIAL);
  const [response, setResponse, RESPONSE_INITIAL] = useResponse();
  const handleForm = async (e) => {
    e.preventDefault();
    if (form.password !== form.passwordVerify) {
      setResponse({ success: false, message: "passwords didn't match" });
      return 0;
    }
    setResponse(RESPONSE_INITIAL);
    try {
      const { data } = await auth.register(form);
      if (data.success) {
        setResponse({
          success: true,
          message: 'Register success! please check your mail for confirmation!',
        });
      }
    } catch (error) {
      setResponse({
        success: false,
        message: error.response.data.message || 'an error occured',
      });
    }
  };
  const handleValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
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
                name="name"
                value={form.name}
                onChange={handleValue}
              />{' '}
              <Input
                title={lang.lastname}
                placeholder={lang.lastnameHolder}
                name="surname"
                value={form.surname}
                onChange={handleValue}
              />
            </div>

            <Input
              title={lang.phone}
              placeholder={lang.phoneHolder}
              name="phone"
              value={form.phone}
              onChange={handleValue}
            />
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
            <Input
              type="password"
              title={lang.passwordConfirm}
              placeholder={lang.passwordConfirmHolder}
              name="passwordVerify"
              value={form.passwordVerify}
              onChange={handleValue}
            />
            <Input
              type="text"
              title={lang.walletNo}
              placeholder={lang.walletNoHolder}
              name="walletNo"
              value={form.walletNo}
              onChange={handleValue}
            />
            <Checkbox title={lang.checkbox} />
            <Info success={response.success}>{response.message}</Info>
            <Button to="/reset" variant="secondary">
              {lang.btnForgot}
            </Button>
            <Button onClick={handleForm}>{lang.btnCreateAccount}</Button>
          </Form>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
