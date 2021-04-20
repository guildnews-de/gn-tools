import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Alert,
} from 'reactstrap';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';
import LangSwitcher from './LangSwitcher';
import ThemeToggle from '../../features/themeToggle';
import {
  selectHeaderMode,
  // selectBodyMode,
} from '../../features/themeToggle/themeToggle.Slice';
import NavMenu from './NavMenu';
import BrandLogo from '../../assets/light_guildnews-logo.png';

function Header() {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);

  const headClass = useSelector(selectHeaderMode);
  // const bodyClass = useSelector(selectBodyMode);

  return (
    <div className="App">
      <header role="banner">
        <Navbar expand="md" color={headClass.color} className={headClass.navbar}>
          <NavbarBrand href="https://guildnews.de/">
            <img id="navbar-logo" src={BrandLogo} alt="App Logo" />
          </NavbarBrand>

          <NavbarToggler onClick={toggle}>
            <I icon={faBars} color="slategray" />
          </NavbarToggler>

          <Collapse isOpen={!collapsed} id="navToggle" navbar>

            <NavMenu />

            <Alert color="warning">
              <strong>
                {t('warning')}
                {' '}
              </strong>
              {t('warn_msg')}
            </Alert>

            <LangSwitcher />
            <ThemeToggle />

          </Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
