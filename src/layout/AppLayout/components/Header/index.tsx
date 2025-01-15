'use client';
import { LOGOUT } from '@redux-action-type/auth';
import { dispatch } from '@redux-common';
import ButtonBase from 'components/button';
import { TextBase } from 'components/text';

const Header = () => {
  const handleLogout = async () => {
    dispatch({ type: LOGOUT });
  };
  return (
    <div className="flex items-center space-x-12 px-16 pt-16">
      <ButtonBase t18n="text:logout" onClick={handleLogout} />
      <TextBase preset="body1" text="Header" flex-1 />
    </div>
  );
};

export default Header;
