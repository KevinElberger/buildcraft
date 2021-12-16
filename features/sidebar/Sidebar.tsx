import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { H2 } from '../../shared/components/H2';
import { Tile } from '../../shared/components/Tile';
import { tiles, TileSprite } from '../../shared/config/tiles';
import { selectActiveTile, setActiveTile } from './slice';

export default function Sidebar() {
  const dispatch = useDispatch();
  const activeTile = useSelector(selectActiveTile);
  const onTileClick = ({ name }: TileSprite) => {
    dispatch(setActiveTile(name));
  };
  const tileset = tiles.map((sprite: TileSprite) => (
    <div key={sprite.name} className={activeTile === sprite.name ? 'active' : ''}>
      <Tile sprite={sprite} size={32} onClick={onTileClick} />
    </div>
  ));

  return (
    <SidebarLayout data-testid="sidebar">
      <H2>Blocks</H2>

      <TileListContainer>
        {tileset}
      </TileListContainer>
    </SidebarLayout>
  );
}

const SidebarLayout = styled.div`
  display: flex;
  height: 100%;
  padding: 24px 16px;
  min-width: 350px;
  position: relative;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
  border-right: 1px solid ${({ theme }) => theme.lightgrey};
`;

const TileListContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-gap: 3px;
  align-self: center;
  grid-template-columns: repeat(9, 32px);

  div.active > div {
    border: 3px solid ${({ theme }) => theme.red};
  }
`;
