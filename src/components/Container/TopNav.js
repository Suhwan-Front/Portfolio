import React from 'react';
import {
  TopNavPresenter,
  NavLogo,
  NavMenu,
  NavMenutag,
} from '../Presenter/TopNavPresenter';

export default function TopNav() {
  return (
    <TopNavPresenter>
      <NavLogo>수환 개발</NavLogo>
      <NavMenu>
        <NavMenutag>About me</NavMenutag>
        <NavMenutag>Skills</NavMenutag>
        <NavMenutag>Archiving</NavMenutag>
        <NavMenutag>Projects</NavMenutag>
        <NavMenutag>Career</NavMenutag>
      </NavMenu>
    </TopNavPresenter>
  );
}
