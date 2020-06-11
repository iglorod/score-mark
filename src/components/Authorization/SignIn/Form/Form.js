import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Form, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import PageLabel from '../../AuthUI/PageLabel/PageLabel';
import { signInActionCreator } from '../../../../store/authorization/actions';
import SubmitButton from '../../AuthUI/SubmitButton/SubmitButton';
import BottomNote from '../../AuthUI/BottomNote/BottomNote';
import Alert from '../../AuthUI/Alert/Alert';
import DataInputs from '../../../UI/DataInputs/DataInputs';
import '../../Authorization.css';

const SignIn = (props) => {
  const [rememberMe, setRememberMe] = useState(true);
  const [stateInputs, setStateInputs] = useState({
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
        placeholder: 'Password'
      },
      validationRules: {
        required: true,
        type: 'string',
        min: 6,
      },
      value: '',
    },
  });

  const signInHandler = () => {
    const userData = {}
    for (let key in stateInputs) {
      userData[key] = stateInputs[key].value;
    }

    props.signIn(userData, rememberMe);
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

  const rememberMeToggle = () => {
    setRememberMe(prevState => !prevState);
  }

  const validateMessages = {
    types: {
      email: '${label} is not valid!',
    },
    string: {
      min: '${label} must be at least ${min} characters',
    },
  };

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
    <Form {...layout} name='nest-messages' onFinish={signInHandler} validateMessages={validateMessages}>
      <PageLabel current={'Sign In'} closed={'Sign Up'} />

      <DataInputs stateInputs={stateInputs} onChangeHandler={onChangeHandler} />

      <Checkbox className={'band-checkbox'} defaultChecked onChange={rememberMeToggle}>Remember me</Checkbox>

      <Alert errorMessage={props.errorMessage} />

      <SubmitButton loading={props.submitting} label={'Sign In'} />

      <BottomNote to='/sign-up' note={'Don\'t have an account? Sign Up'} />
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
    signIn: (userData, rememberMe) => dispatch(signInActionCreator(userData, rememberMe)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
