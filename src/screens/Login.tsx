import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { InputText, Button } from '../features/ui';
import { loginApi } from '../features/api/Api';

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

  const onFormSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (loginFormData && loginFormData.password) {
      const {
        data: { token },
      } = await loginApi.post('/login', {
        email: loginFormData.email,
        password: loginFormData.password,
      });
      localStorage.setItem('token', token);
      console.log(token);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <h2>Welcome</h2>
        <h3>Please enter your information to continue</h3>
      </TitleContainer>
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

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 2.5rem;
`;

const StyledFormContainer = styled.form`
  display: grid;
  justify-content: center;
  padding: 2.5rem;
  border-radius: 5px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
