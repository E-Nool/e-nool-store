import styled from 'styled-components'
// lib
import palette from '../../lib/styles/palette'
import zIndex from '../../lib/styles/zIndex'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  z-index: ${zIndex.header};
`;

export const AutoLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  padding-left:5%;
  padding-right:5%;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  & > div:last-child {
    margin-right: 8px;
  }
`;

export default Layout