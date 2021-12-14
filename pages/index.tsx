import type { NextPage } from 'next'
import styled from 'styled-components'
import { Grid } from '../components/Grid';

const Build: NextPage = () => {
  return (
    <Wrapper>
      <Content>
        <Grid rows={6} columns={6} tileSize={32} />
      </Content>
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

const Content = styled.div`

`;

export default Build
