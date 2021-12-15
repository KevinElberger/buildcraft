import * as React from 'react';
import styled from 'styled-components';
import { TileSprite } from '../../config/tiles';

interface Props {
  size: number;
  sprite?: TileSprite;
}

export const Tile = ({ size, sprite }: Props) => {
  return (
    <TileWrapper size={size} role="button">
      {sprite &&
        <>
          <ImgWrapper sprite={sprite}></ImgWrapper>
        </>
      }
    </TileWrapper>
  );
};

const ImgWrapper = styled.div<Pick<Props, 'sprite'>>`
  height: 16px;
  width: 16px;
  object-fit: contain;
  background-image: url('/tilesheet.png');
  background-position-x: ${props => props.sprite?.x}px;
  background-position-y: ${props => props.sprite?.y}px;
`;

const TileWrapper = styled.div<Pick<Props, 'size'>>`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.lightgrey};

  &:hover {
    border-color: ${({ theme }) => theme.black};
  }

  ${ImgWrapper} {
    transform: scale(${props => (props.size / 16) * 1});
  }
`;

