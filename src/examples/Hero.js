import styled from "styled-components";
import img3 from '../images/imagethree.jpg'

const Hero = styled.div`
  min-height: ${(({big}) => big ? '100vh' : '50vh')};
  background-image: url(${(({img}) => img ? img : img3)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Hero;