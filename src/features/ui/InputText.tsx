import { ChangeEvent, CSSProperties } from 'react';
import styled from 'styled-components';

interface InputProps {
  placeHolder: string;
  value: string | number;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: 'password' | 'text' | 'number' | 'email';
  style?: CSSProperties;
}

export const InputText = ({
  placeHolder,
  value,
  setValue,
  name,
  type,
  style,
}: InputProps) => {
  return (
    <StyledInput
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={setValue}
      type={type}
      style={style}
    />
  );
};

const StyledInput = styled.input`
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px;
`;
