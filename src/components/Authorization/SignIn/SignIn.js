import React from 'react';

import SideInfo from '../AuthUI/SideInfo/SideInfo';
import SignInForm from './Form/Form';
import '../Authorization.css';

const SignIn = () => {
  return (
    <div className={'auth-section'}>
      <SideInfo title='Sign In' />
      <SignInForm />
    </div>
  )
}

export default SignIn;
