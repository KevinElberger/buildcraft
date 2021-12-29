import * as React from 'react';
import styled from 'styled-components';
import { TileSprite } from '../../config/tiles';

interface Props {
  size: number;
  x?: number;
  y?: number;
  sprite?: TileSprite | null;
}

const Tile = ({ size, sprite, x, y }: Props) => {
  return (
    <TileWrapper size={size} role="button" data-x={x} data-y={y} sprite={sprite}>
      {sprite && <ImgWrapper sprite={sprite} data-x={x} data-y={y}></ImgWrapper>}
    </TileWrapper>
  );
};

export default React.memo(Tile);

const ImgWrapper = styled.div<Pick<Props, 'sprite'>>`
  height: 16px;
  width: 16px;
  object-fit: contain;
  user-select: none;
  background-image: url('/tilesheet.png');
  background-position-x: ${props => props.sprite?.x}px;
  background-position-y: ${props => props.sprite?.y}px;
`;

const TileWrapper = styled.div<Pick<Props, 'size' | 'sprite'>>`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid ${(props) => props.sprite ? props.theme.black : props.theme.lightgrey};
  transition: transform .2s cubic-bezier(.64,.04,.35,1);

  &:hover {
    transform: scale(1.07);
    border-color: ${({ theme }) => theme.black};
  }

  ${ImgWrapper} {
    transform: scale(${props => (props.size / 16) * 1});
  }
`;

