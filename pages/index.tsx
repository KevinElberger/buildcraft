import type { NextPage } from 'next'
import styled from 'styled-components'
import Map from '../features/map/Map';
import TileSidebar from '../features/tile-sidebar/TileSidebar';

const Builder: NextPage = () => {
  return (
    <Wrapper>
      <TileSidebar />
      <Map />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bgGrey};
`;

export default Builder
