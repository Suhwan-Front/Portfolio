import styled from 'styled-components';

const TopNavPresenter = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: fixed;
  justify-content: space-around;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
`;

const NavLogo = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  color: #dddddd;
  align-items: center;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

const NavMenu = styled.ul`
  display: grid;
  text-align: center;
  grid-template-columns: 100px 100px 100px 100px 100px;
  font-weight: bold;
  color: #dddddd;
  cursor: pointer;
`;

const NavMenutag = styled.li`
  list-style: none;
  :hover {
    color: white;
  }
`;

export {TopNavPresenter, NavLogo, NavMenu, NavMenutag};
