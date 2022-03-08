import styled from 'styled-components';
import MainImg from '../../img/MainImg.jpg';

const ImagePresenter = styled.div`
  min-width: 100vw;
  height: 600px;
  background-image: url(${MainImg});
  background-position: center;
  background-size: cover;
`;

export default ImagePresenter;
