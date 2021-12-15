import * as React from 'react';
import styled from 'styled-components';
import { H2 } from '../../shared/components/H2';

export default function Sidebar() {
  return (
    <SidebarLayout data-testid="sidebar">
      <H2>Blocks</H2>
    </SidebarLayout>
  );
}

const SidebarLayout = styled.div`
  display: flex;
  height: 100%;
  padding: 24px 16px;
  min-width: 350px;
  position: relative;
  background: ${({ theme }) => theme.white};
  border-right: 1px solid ${({ theme }) => theme.lightgrey};
`;
