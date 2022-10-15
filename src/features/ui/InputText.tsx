import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  placeHolder: string;
  value: string | number;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: 'password' | 'text' | 'number' | 'email';
}

export const InputText = ({
  placeHolder,
  value,
  setValue,
  name,
  type,
}: InputProps) => {
  return (
    <div>
      <StyledInput
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={setValue}
        type={type}
      />
    </div>
  );
};

const StyledInput = styled.input`
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px;
`;
