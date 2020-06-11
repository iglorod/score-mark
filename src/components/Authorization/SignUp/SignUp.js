import React from 'react';

import SideInfo from '../AuthUI/SideInfo/SideInfo';
import SignUpForm from './Form/Form';
import '../Authorization.css';

const SignUp = () => {
  return (
    <div className={'auth-section'}>
      <SideInfo title='Sign Up' />
      <SignUpForm />
    </div>
  )
}

export default SignUp;
