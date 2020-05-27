import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Form } from 'antd';

import { signUpActionCreator } from '../../../store/authorization/actions';
import SubmitButton from '../AuthUI/SubmitButton/SubmitButton';
import BottomNote from '../AuthUI/BottomNote/BottomNote';
import Alert from '../AuthUI/Alert/Alert';
import Head from '../AuthUI/Head/Head';
import DataInputs from '../../UI/DataInputs/DataInputs';
import '../Authorization.css';

const SignUp = (props) => {
  const [stateInputs, setStateInputs] = useState({
    login: {
      config: {
        name: 'login',
        label: 'Login',
        placeholder: 'Type your login here',
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
        label: 'Email',
        placeholder: 'Type your email here',
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
        label: 'Password',
        placeholder: 'Type password here',
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

  const validateMessages = {
    types: {
      email: '${label} is not valid!',
    },
    string: {
      min: '${label} must be at least ${min} characters',
      max: '${label} must be not longer ${min} characters',
    },
  };

  if (props.email) return (
    <Redirect to={'/'} />
  )

  const layout = {
    labelCol: {
      sm: { offset: 2, span: 4 },
      md: { offset: 4, span: 4 },
      lg: { offset: 6, span: 2 },
    },
    wrapperCol: {
      sm: { span: 12 },
      md: { span: 8 },
      lg: { span: 8 },
    },
  };

  return (
    <React.Fragment>
      <Head title='Sign Up' />
      <Form {...layout} name='nest-messages' onFinish={signUpHandler} validateMessages={validateMessages}>
        <DataInputs stateInputs={stateInputs} onChangeHandler={onChangeHandler} />

        <Alert errorMessage={props.errorMessage} />

        <SubmitButton loading={props.submitting} label={'Sign Up'} />
        <BottomNote to='/sign-in' note='Already have an account? Sign In' />
      </Form>
    </React.Fragment>
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
