import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

function NavMenu() {
  const { t } = useTranslation();

  return (
    <Nav className="mr-auto" navbar>
      <NavItem><NavLink href="/">{t('home')}</NavLink></NavItem>
      <NavItem><NavLink href="/timer">{t('timer')}</NavLink></NavItem>
      <NavItem><NavLink href="/aetherium">{t('aetherium')}</NavLink></NavItem>
      <NavItem><NavLink href="/gold">{t('gold')}</NavLink></NavItem>
    </Nav>
  );
}

export default NavMenu;
