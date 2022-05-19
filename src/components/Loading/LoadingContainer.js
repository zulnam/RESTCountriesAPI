import React from 'react';
import styled from '@emotion/styled';

const LoadingContainer = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 12px;
  height: 80px;
  position: absolute;
  top: 50vh;
  right: 50vw;
`;

export default React.memo(LoadingContainer);
