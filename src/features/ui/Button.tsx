import { MouseEvent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  title: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #1890ff;
  border-radius: 5px;
  color: white;
  padding: 5px;
`;
