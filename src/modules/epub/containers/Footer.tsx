// components
import Wrapper from '../components/footer/Wrapper'
import Item from '../components/footer/Item'
import MoveBtn from '../components/footer/MoveBtn'


const Footer = ({ title, currentPage, totalPage, onPageMove }: Props) => {
  return (
    <Wrapper>
      <div className="opacity-20  md:opacity-100 hover:opacity-100  ">
        <MoveBtn type="PREV" position="left" onClick={() => onPageMove("PREV")} />
        <MoveBtn type="NEXT" position="right" onClick={() => onPageMove("NEXT")} />
      </div>
      <Item currentPage = {String(currentPage)} totalPage = {String(totalPage)}  />
    </Wrapper>
  );
}

interface Props {
  title: string;
  currentPage: Number;
  totalPage: Number;
  onPageMove: (type: "PREV" | "NEXT") => void;
}

export default Footer