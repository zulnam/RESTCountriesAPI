import React from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 3rem;
  width: ${(props) => (props.width ? `${props.width}px;` : 'unset;')};
  height: ${(props) => (props.height ? `${props.height}px;` : 'unset;')};
  padding-bottom: 0.1rem;
  font-size: 0.9rem;
  cursor: pointer;
`;

const PrimaryButton = React.forwardRef((props, ref) => (
  <ButtonContainer
    ref={ref}
    data-cy={props.dataCy}
    onClick={props.onClick}
    width={props.width}
    height={props.height}
    className={props.className}
  >
    {props.children}
  </ButtonContainer>
));
PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
