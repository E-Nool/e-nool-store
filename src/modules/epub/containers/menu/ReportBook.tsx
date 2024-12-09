import React from 'react'
import { useSelector } from 'react-redux'
// components
import Wrapper from '../../components/sideMenu/Wrapper'
import BookInfo from '../../components/nav/BookInfo'
import NavItem from '../../components/nav/NavItem'
// types
import { RootState } from '../../slices'
import Book from '../../types/book'
import Toc from '../../types/toc'
import { MenuControl } from '../../lib/hooks/useMenu'
import ReportBookComponent from '@modules/report-book'
import MenuEmpty from '../../components/sideMenu/MenuEmpty'

const ReportBook = ({ control, onToggle, onLocation ,arrowsRestrication}: Props, ref: any) => {
  const book = useSelector<RootState, Book>(state => state.book.book);
  const bookToc = useSelector<RootState, Toc[]>(state => state.book.toc);
  
  /** Click nav item */
  const onClickItem = (loc: string) => {
    onLocation(loc);
    onToggle();
  }

  const Tocs = bookToc.map((t, idx) => 
    <NavItem key={idx}
             message={t.label}
             onClick={() => onClickItem(t.href)} />
  );
  
  
  return (<>
    {control.display && <Wrapper title="Report book" 
                                 show={control.open}
                                 onClose={onToggle}
                                 ref={ref}>
     {! arrowsRestrication ? <ReportBookComponent></ReportBookComponent> : <MenuEmpty text="Account required for report!" />}
    </Wrapper>}
  </>);
}

interface Props {
  control: MenuControl;
  onToggle: () => void;
  onLocation: (loc: string) => void;
  arrowsRestrication : Boolean;
}

export default React.forwardRef(ReportBook)