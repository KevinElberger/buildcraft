import type { NextPage } from 'next'
import styled from 'styled-components'
import GridSidebar from '../features/grid-sidebar/GridSidebar';
import Header from '../features/header/Header';
import Map from '../features/map/Map';
import TileSidebar from '../features/tile-sidebar/TileSidebar';

const Builder: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <TileSidebar />
        <Map />
        <GridSidebar />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 65px);
  background: ${({ theme }) => theme.bgGrey};
`;

export default Builder
