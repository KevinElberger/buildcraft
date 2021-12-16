import * as React from 'react';
import styled from 'styled-components';
import { TileSprite } from '../../config/tiles';

interface Props {
  size: number;
  sprite?: TileSprite;
  onClick: Function;
}

export const Tile = ({ size, sprite, onClick }: Props) => {
  const onMouseEnter = (event: React.MouseEvent) => {
    const isHoldingMouseButton = event.buttons === 1;
    if (isHoldingMouseButton) {
      onClick(sprite);
    }
  };
  return (
    <TileWrapper onClick={() => onClick(sprite)} size={size} onMouseEnter={e => onMouseEnter(e)} role="button">
      {sprite && <ImgWrapper sprite={sprite}></ImgWrapper>}
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
  transition: transform .2s cubic-bezier(.64,.04,.35,1);

  &:hover {
    transform: scale(1.07);
    border-color: ${({ theme }) => theme.black};
  }

  ${ImgWrapper} {
    transform: scale(${props => (props.size / 16) * 1});
  }
`;

