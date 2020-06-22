import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Form } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

import PageLabel from '../../AuthUI/PageLabel/PageLabel';
import { signUpActionCreator } from '../../../../store/authorization/actions';
import SubmitButton from '../../AuthUI/SubmitButton/SubmitButton';
import BottomNote from '../../AuthUI/BottomNote/BottomNote';
import Alert from '../../AuthUI/Alert/Alert';
import DataInputs from '../../../UI/DataInputs/DataInputs';
import { validateMessages } from '../../../../utility/validationMessages';
import '../../Authorization.css';

const SignUp = (props) => {
  const [stateInputs, setStateInputs] = useState({
    login: {
      config: {
        name: 'login',
        suffix: <UserOutlined />,
        placeholder: 'Login',
      },
      validationRules: {
        required: true,
        type: 'string',
        min: 3,
        max: 15,
      },
      value: '',
    },
    email: {
      config: {
        name: 'email',
        suffix: <MailOutlined />,
        placeholder: 'Email',
      },
      validationRules: {
        required: true,
        type: 'email',
      },
      value: '',
    },
    password: {
      config: {
        type: 'password',
        name: 'password',
        suffix: <LockOutlined />,
        placeholder: 'Password',
      },
      validationRules: {
        required: true,
        type: 'string',
        min: 6,
      },
      value: '',
    },
  });

  const signUpHandler = () => {
    const newUser = {}
    for (let key in stateInputs) {
      newUser[key] = stateInputs[key].value;
    }

    props.signUp(newUser);
  }

  const onChangeHandler = (inputName, event) => {
    const newValue = event.target.value;
    setStateInputs(prevState => ({
      ...prevState,
      [inputName]: {
        ...prevState[inputName],
        value: newValue,
      }
    }));
  }

  if (props.email) return (
    <Redirect to={'/'} />
  )

  const layout = {
    wrapperCol: {
      xs: { span: 24 },
      md: { offset: 6, span: 12 },
    },
  };

  return (
    <Form {...layout} name='nest-messages' onFinish={signUpHandler} validateMessages={validateMessages}>
      <PageLabel current={'Sign Up'} closed={'Sign In'} />

      <DataInputs stateInputs={stateInputs} onChangeHandler={onChangeHandler} />

      <Alert errorMessage={props.errorMessage} />

      <SubmitButton loading={props.submitting} label={'Sign Up'} />
      <BottomNote to='/sign-in' note='Already have an account? Sign In' />
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    email: state.auth.email,
    submitting: state.auth.submitting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUpActionCreator(newUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
