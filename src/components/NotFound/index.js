import {NotContainer, NotImg, NotHead, NotDes} from './styledComponents'

const NotFound = () => (
  <NotContainer>
    <NotImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotHead>Page Not Found</NotHead>
    <NotDes>We are sorry, the page you requested could not be found</NotDes>
  </NotContainer>
)

export default NotFound