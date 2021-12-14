import * as React from 'react';
import styled from 'styled-components';

interface Props {
  size: number;
}

export const Tile = ({ size }: Props) => {
  return <TileWrapper size={size}></TileWrapper>
};

const TileWrapper = styled.div<Props>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.lightgrey};

  &:hover {
    border-color: ${({ theme }) => theme.black};
  }
`;
