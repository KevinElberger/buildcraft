import * as React from 'react';
import styled from 'styled-components';

const GridSidebar: React.FC = () => {
  return (
    <Layout>
      <p>Hello world</p>
    </Layout>
  );
};

export default GridSidebar;

const Layout = styled.div`
  display: flex;
  height: 100%;
  padding: 24px 16px;
  min-width: 260px;
  position: relative;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
  border-left: 1px solid ${({ theme }) => theme.lightgrey};
`;
