import React from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0 0 10px 0 #ccc;
  margin-bottom: 3rem;
  width: ${(props) => (props.width ? `${props.width}px;` : 'unset;')};
  height: ${(props) => (props.height ? `${props.height}px;` : 'unset;')};
  background: white;
  padding-bottom: 0.1rem;
  font-size: 0.9rem;
  cursor: pointer;
`;

const PrimaryButton = React.forwardRef(
  ({ children, width, height, onClick, dataCy }) => (
    <ButtonContainer
      data-cy={dataCy}
      onClick={onClick}
      width={width}
      height={height}
    >
      {children}
    </ButtonContainer>
  )
);
PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
