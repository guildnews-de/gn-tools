import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import {
  selectHeaderMode,
  // selectBodyMode,
} from '../../features/themeToggle/themeToggle.Slice';

function LangSwitcher() {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const langChange = (e) => i18n.changeLanguage(e.target.value);

  const headClass = useSelector(selectHeaderMode);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color={headClass.button} caret>
        {t('lngName')}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem value="de" onClick={langChange}>Deutsch</DropdownItem>
        <DropdownItem value="en" onClick={langChange}>English</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
export default LangSwitcher;
