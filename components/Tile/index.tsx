import * as React from 'react';
import styled from 'styled-components';

export const Tile = () => {
  return <TileWrapper></TileWrapper>
};

const TileWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.lightgrey};

  &:hover {
    border-color: ${({ theme }) => theme.black};
  }
`;
