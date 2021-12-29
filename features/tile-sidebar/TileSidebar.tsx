import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { H2 } from '../../shared/components/H2';
import Tile from '../../shared/components/Tile';
import { tiles, TileSprite } from '../../shared/config/tiles';
import { selectActiveTile, setActiveTile } from './slice';

export default function TileSidebar() {
  const dispatch = useDispatch();
  const activeTile = useSelector(selectActiveTile);
  const onTileClick = (sprite: TileSprite) => {
    dispatch(setActiveTile(sprite));
  };
  const tileset = tiles.map((sprite: TileSprite) => (
    <div key={sprite.id} className={activeTile?.name === sprite.name ? 'active' : ''} onClick={() => onTileClick(sprite)}>
      <Tile sprite={sprite} size={32}  />
    </div>
  ));

  return (
    <SidebarLayout data-testid="sidebar">
      <Heading>Blocks</Heading>

      <TileWrapper>
        <TileListContainer>
          {tileset}
        </TileListContainer>
      </TileWrapper>
    </SidebarLayout>
  );
}

const SidebarLayout = styled.div`
  display: flex;
  height: 100%;
  padding: 24px 16px;
  min-width: 260px;
  position: relative;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
  border-right: 1px solid ${({ theme }) => theme.lightgrey};
`;

const TileWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const TileListContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-gap: 6px;
  align-self: center;
  grid-template-columns: repeat(auto-fit, 32px);

  div.active > div {
    border: 3px solid ${({ theme }) => theme.red};
  }
`;

const Heading = styled.div`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
`;
