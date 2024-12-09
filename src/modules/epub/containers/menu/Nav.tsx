import React from 'react'
import { useSelector } from 'react-redux'
// components
import LeftWrapper from '../../components/sideMenu/LeftWrapper'
import BookInfo from '../../components/nav/BookInfo'
import NavItem from '../../components/nav/NavItem'
// types
import { RootState } from '../../slices'
import Book from '../../types/book'
import Toc from '../../types/toc'
import { MenuControl } from '../../lib/hooks/useMenu'

const Nav = ({ control, onToggle, onLocation,arrowsRestrication }: Props, ref: any) => {
  const book = useSelector<RootState, Book>(state => state.book.book);
  const bookToc = useSelector<RootState, Toc[]>(state => state.book.toc);
  
  /** Click nav item */
  const onClickItem = (loc: string) => {
    if(!arrowsRestrication){
      onLocation(loc);
      onToggle();
    }
  }

  const Tocs = bookToc.map((t, idx) => 
    <NavItem key={idx}
             message={t.label}
             onClick={() => onClickItem(t.href)} />
  );
  
  
  return (<>
    {control.display && <LeftWrapper title="Contents" 
                                 show={control.open}
                                 onClose={onToggle}
                                 ref={ref}>
      <BookInfo 
        src={book.coverURL}
        title={book.title}
        publisher={book.publisher}
        author={book.author} 
      />
      {Tocs}
    </LeftWrapper>}
  </>);
}

interface Props {
  control: MenuControl;
  onToggle: () => void;
  onLocation: (loc: string) => void;
  arrowsRestrication : Boolean;
}

export default React.forwardRef(Nav)