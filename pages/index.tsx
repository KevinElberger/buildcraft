import type { NextPage } from 'next'
import styled from 'styled-components'
import Header from '../features/header';
import Map from '../features/map/Map';
import TileSidebar from '../features/tile-sidebar/TileSidebar';

const Builder: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <TileSidebar />
        <Map />
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bgGrey};
`;

export default Builder
