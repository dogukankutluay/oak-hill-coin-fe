import Background from 'components/background';
import Button from 'components/button';
import Container, { Row } from 'components/container';
import Footer from 'components/footer';
import Logo from 'components/logo';
import Navbar from 'components/navbar';
import { Description, Title } from 'components/text';
export default function ChangePasswordSuccess() {
  return (
    <Background>
      <Container>
        <Row>
          <Logo />
        </Row>
        <Row>
          <Navbar />
          <svg
            width="194"
            height="237"
            viewBox="0 0 194 237"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              padding: '2rem',
            }}
          >
            <path
              d="M7 176.483H187.119M7.07067 230.202H187.191H7.07067ZM133.608 203.24L187.191 203.462L133.608 203.24ZM7.07067 203.462L97.7307 203.24L7.07067 203.462Z"
              stroke="#D4D4D4"
              stroke-width="12.415"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M53.415 203.349C75.7372 203.294 97.7309 203.24 97.7309 203.24M7.0708 230.202H187.191H7.0708ZM133.608 203.24L187.191 203.462L133.608 203.24Z"
              stroke="#1DC070"
              stroke-width="12.415"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.0733753"
              d="M136.368 122.642L154.33 133.011M145.349 138.197V117.456V138.197ZM154.33 122.642L136.368 133.011L154.33 122.642Z"
              stroke="#1DC070"
              stroke-width="3.82"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M126.084 55.1726C126.084 70.9569 113.291 83.7501 97.5071 83.7501C81.7228 83.7501 68.9277 70.9569 68.9277 55.1726V27.0498H126.084V55.1726Z"
              fill="#E5E5E5"
            />
            <path
              d="M81.9387 27.7877C81.9387 27.7877 81.8833 27.1912 81.8833 18.5894C81.8833 9.98105 88.8624 3 97.4708 3C106.079 3 113.06 9.98105 113.06 18.5894V27.4811"
              stroke="#7FD79B"
              stroke-width="5.73"
              stroke-linejoin="round"
            />
            <path
              d="M73.5249 34.2809C73.5249 32.8255 74.7053 31.647 76.1607 31.647C77.6161 31.647 78.7946 32.8255 78.7946 34.2809C78.7946 35.7363 77.6161 36.9167 76.1607 36.9167C74.7053 36.9167 73.5249 35.7363 73.5249 34.2809ZM121.487 34.2809C121.487 32.8255 120.308 31.647 118.853 31.647C117.398 31.647 116.217 32.8255 116.217 34.2809C116.217 35.7363 117.398 36.9167 118.853 36.9167C120.308 36.9167 121.487 35.7363 121.487 34.2809Z"
              fill="#D0E7DC"
            />
          </svg>

          <Title>You have changed your password!</Title>
          <Description>
            You can click to “Continue” button to see your dashboard.
          </Description>
          <Button>Continue</Button>
          <Footer />
        </Row>
      </Container>
    </Background>
  );
}
