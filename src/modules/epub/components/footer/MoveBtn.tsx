import styled from 'styled-components'
// icons
import { PrevIcon, NextIcon } from '../../lib/svg'
// lib
import * as styles from '../../lib/styles/styles'

const MoveBtn = ({ type, position , onClick }: Props) => {
  const Icon = type === "PREV"
    ? PrevIcon
    : NextIcon;
  
  const msg = type === "PREV"
    ? "이전 페이지"
    : "다음 페이지";

  return (
    <>
    { position == "left" ? 
    <Container onClick={onClick} title={msg} style={{ left : '5px' }}>
      <Content>
        <Icon />
      </Content>
    </Container>  : 
    <Container onClick={onClick} title={msg} style={{ right : '5px' }}>
      <Content>
        <Icon />
      </Content>
    </Container>    
    }
  </>
  );
}

const Container = styled.button`
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  width: 54px;
  height: 54px;
  background: #27DEBF 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius:50%;
  position : fixed;
  top : 50%;
  &:focus, &:hover {
    background: #27DEBF 0% 0% no-repeat padding-box;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .1s ${styles.transition};

  & > svg {
    width: 18px;
    height: 18px;
  }
`;

interface Props {
  type: "PREV" | "NEXT",
  position : string;
  onClick: () => void;
}

export default MoveBtn;