import styled from 'styled-components'
// lib
import palette from '../../lib/styles/palette'
import { round } from 'lodash';

const Item = ({ currentPage,totalPage }: Props) => {
  let percentage = ( parseInt(currentPage) / parseInt(totalPage)) * 100
  return (
    <Container>
      <div className='flex'>
      <div className=''>{currentPage} / {totalPage}  </div>
      <div className=" mx-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#7CC9B5] mt-2">
        <div className="bg-[#015464] h-2.5 rounded-full" style={{width: `${percentage}%`}}></div>
      </div>
      <div className=''> { round(percentage) } % </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  // height: 100%;
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > span {
    color: ${palette.gray4};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

interface Props {
  currentPage: string;
  totalPage: string;
}

export default Item;