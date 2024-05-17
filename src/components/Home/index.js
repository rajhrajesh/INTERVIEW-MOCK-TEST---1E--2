import {Link} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'

import NavBar from '../NavBar'

import {
  Container,
  Heading,
  Description,
  Button,
  RegisImg,
  AfterRegisImg,
  RegisHead,
  RegisDes,
} from './styledComponents'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  const renderRegisterView = () => (
    <>
      <Heading>Welcome to Meetup</Heading>
      <Description>Please register for the topic</Description>
      <Link to="/register">
        <Button onClick={onClickRegister}>Register</Button>
      </Link>
      <RegisImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  const renderAfterRegisterView = (name, topic) => (
    <>
      <RegisHead>{`Hello ${name}`}</RegisHead>
      <RegisDes>{`Welcome to ${topic}`}</RegisDes>
      <AfterRegisImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value
        return (
          <>
            <NavBar />
            <Container>
              {isRegister
                ? renderAfterRegisterView(name, topic)
                : renderRegisterView()}
            </Container>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
