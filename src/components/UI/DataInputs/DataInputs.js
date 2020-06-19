import React from 'react';

import { Form, Input } from 'antd';

const AuthInputs = ({ stateInputs, onChangeHandler }) => {
  let inputs = [];
  for (let key in stateInputs) {
    inputs.push(
      <Form.Item
        key={key}
        name={stateInputs[key].config.name}
        label={stateInputs[key].config.label}
        rules={[stateInputs[key].validationRules]}
        initialValue={stateInputs[key].defaultValue}>
        <Input
          type={stateInputs[key].config.type}
          value={stateInputs[key].value}
          placeholder={stateInputs[key].config.placeholder}
          suffix={stateInputs[key].config.suffix}
          onChange={onChangeHandler.bind(this, key)}
        />
      </Form.Item>
    );
  }

  return inputs;
}

export default AuthInputs;
