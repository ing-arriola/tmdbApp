import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { InputText, Button } from '../features/ui';

export const Login = () => {
  const [loginFormData, setloginFormData] = useState({
    email: '',
    password: '',
  });

  const onFormDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setloginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <h2>Welcome</h2>
      <h3>Please enter your information to continue</h3>
      <StyledFormContainer>
        <InputText
          placeHolder="Enter your email"
          name="email"
          value={loginFormData.email}
          setValue={onFormDataChange}
          type="email"
        />
        <InputText
          placeHolder="Enter your password"
          name="password"
          value={loginFormData.password}
          setValue={onFormDataChange}
          type="password"
        />
        <Button title="Login" onClick={onFormSubmit} />
      </StyledFormContainer>
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  align-content: center;
`;

const StyledFormContainer = styled.form`
  display: grid;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
