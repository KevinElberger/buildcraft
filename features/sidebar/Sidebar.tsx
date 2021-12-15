import * as React from 'react';
import styled from 'styled-components';
import { H2 } from '../../shared/components/H2';
import { Tile } from '../../shared/components/Tile';
import { tiles, TileSprite } from '../../shared/config/tiles';

export default function Sidebar() {
  const tileset = tiles.map((sprite: TileSprite) => (
    <Tile sprite={sprite} size={32} key={sprite.name} />
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
`;
