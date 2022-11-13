import React from 'react';
import LoginView from '../../../pages/login/view';
import useLoginViewModel from '../../../pages/login/view.model';

const loginViewFactory: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loginViewModel = useLoginViewModel();

  return <LoginView loginViewModel={loginViewModel} />;
};

export default loginViewFactory;
