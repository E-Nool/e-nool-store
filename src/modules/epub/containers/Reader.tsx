// @ts-nocheck
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Provider } from 'react-redux'
import { ReactEpubViewer } from 'react-epub-viewer'
import Modal from "@modules/common/components/modal"
// .
import Header from './Header'
import Footer from './Footer'
import Nav from './menu/Nav'
import Option from './menu/Option'
import Learning from './menu/Note'
import ReportBook from './menu/ReportBook'
import ContextMenu from './commons/ContextMenu'
import Snackbar from './commons/Snackbar'
import useToggleState from "@lib/hooks/use-toggle-state"
// components
import ViewerWrapper from '../components/commons/ViewerWrapper'
import ReaderRestrication from '../components/commons/ReaderRestrication'
import LoadingView from '../LoadingView'
// slices
import store from '../slices'
import { updateBook, updateCurrentPage, updateToc } from '../slices/book'
// hooks
import useMenu from '../lib/hooks/useMenu'
import useHighlight from '../lib/hooks/useHighlight'
// styles
import '../lib/styles/readerStyle.css'
import viewerLayout from '../lib/styles/viewerLayout'
// types
import { RootState } from '../slices'
import { ViewerRef } from '../types'
import Book, { BookStyle, BookOption } from '../types/book'
import Page from '../types/page'
import Toc from '../types/toc'

const Reader = ({ url, loadingView, totalPage ,full_access ,handle , readData , product ,arrowsRestrication, bookPurchased }: Props) => {
	const { state, close, open } = useToggleState()
	const dispatch = useDispatch();
  	var currentLocation = useSelector<RootState, Page>(state => state.book.currentLocation);
	//   currentLocation.currentPage = 5
	// console.log("teste",full_access)
  
	const viewerRef = useRef<ViewerRef | any>(null);
	const navRef = useRef<HTMLDivElement | null>(null);
  	const optionRef = useRef<HTMLDivElement | null>(null);
  	const learningRef = useRef<HTMLDivElement | null>(null);

	const [isContextMenu, setIsContextMenu] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState(0);
	const [restrictReader, setRestrictReader] = useState(false);
	const [fullAccess, setFull_access] = useState(full_access);
	const [readPercentage ,setReadPercentage ] = useState(0)
	const [continueHref ,setContinueHref ] = useState(null)
	
	const [bookStyle, setBookStyle] = useState<BookStyle>({
    fontFamily: 'Origin',
    fontSize: 15,
	textAlign:"left",
    lineHeight: 1.4,
    marginHorizontal: 22,
    marginVertical: 10,
	textColor :""
  });

  const [bookOption, setBookOption] = useState<BookOption>({
    flow: "paginated",
    resizeOnOrientationChange: true,
    spread: "auto"
  });

  // console.log(bookPurchased)

  useEffect(function(){
		if(readData != null ){
			setReadPercentage(readData?.percentage)
			// console.log(readData)
			if(readData?.extra_fields != null){
				let extra_fields = JSON.parse(readData?.extra_fields)
				setCurrentPage(extra_fields.current_page)
				setContinueHref(extra_fields.current)
			}
			// console.log(readData?.percentage);
			if(readData?.percentage != 0)
				open()
			}
  }, [readData])



  if(viewerRef != null){
	let cNode =  viewerRef.current;

	if (cNode != null ){
		cNode.style.setProperty("margin-top" , "5px");
		cNode.style.setProperty("margin-bottom" , "5px");

		let iframeObj=document.querySelector("iframe");
		if(iframeObj != null){
			let contentDoc = iframeObj.contentDocument
			if(contentDoc != null){
			  // Access an element inside the iframe using its Tag
			  var iframeElement = contentDoc.getElementsByTagName("body");
			  let coverBody = contentDoc.getElementById("cover");
			  if(coverBody != null){
				coverBody.style.setProperty("padding-right" ,"10%")
				let coverImage = contentDoc.getElementById("cover-image");
				if(coverImage != null){
					coverImage.style.setProperty("padding-top" ,"7%")
				}
			  }else{
			  	iframeElement[0].style.setProperty("text-align" ,bookStyle.textAlign)
			  	iframeElement[0].style.setProperty("color" ,bookStyle.textColor)	
				iframeElement[0].style.setProperty("columnGap" ,"45px !important")	
			  }
			}
		}
		
		}
	}
	const [navControl, onNavToggle] = useMenu(navRef, 300.);
	const [optionControl, onOptionToggle, emitEvent] = useMenu(optionRef, 300);
	const [learningControl, onLearningToggle] = useMenu(learningRef, 300);
	const [reportBookToggle, onReportBookToggle] = useMenu(learningRef, 300);
	const { 
		selection, 
		onSelection, 
		onClickHighlight,
		onAddHighlight,
		onRemoveHighlight,
		onUpdateHighlight
	} = useHighlight(viewerRef, setIsContextMenu, bookStyle, bookOption.flow);


	/**
	 * Change Epub book information
	 * @param book Epub Book Info
	 */
	const onBookInfoChange = (book: Book) => dispatch(updateBook(book));

  /**
	 * Change Epub location
	 * @param loc epubCFI or href
	 */
	const onLocationChange = (loc: string) => {
		close()
		if(arrowsRestrication){}
		if (!viewerRef.current) return;
		viewerRef.current.setLocation(loc);
	}
	const readFromStartOver = () =>{
		close()
		setReadPercentage(0)
		setCurrentPage(0)
		setContinueHref(null)

	}
	
	// console.log(full_access)
	/**
	 * Move page
	 * @param type Direction
	 */
	const onPageMove = (type: "PREV" | "NEXT") => {
	// open()


		const node = viewerRef.current;
		if (!node || !node.prevPage || !node.nextPage) return;
		// console.log("current",node.getCurrentCfi())
		// console.log("navRef",navRef)

		if(type === "PREV") { 
			// console.log(currentPage)
			if(currentPage === 0) return;
			setCurrentPage(currentPage - 1)	
			node.prevPage()
			console.log(readData?.subscription_id)
			document.dispatchEvent(new CustomEvent("on:reader:page:change", {
		    detail: {
		    	current : node.getCurrentCfi(),
		    	current_page : currentPage - 1,
		    	full_access : full_access,
					sub_id : readData?.subscription_id,
					book_purchased : bookPurchased
		    }
		  }));
		}
		if(type === "NEXT"){	
			if(currentPage != totalPage ) {
				setCurrentPage(currentPage + 1)
				setTimeout(node.nextPage(), 5000)

				document.dispatchEvent(new CustomEvent("on:reader:page:change", {
			    detail: {
			    	current : node.getCurrentCfi(),
			    	current_page : currentPage + 1,
			    	full_access : full_access,
						sub_id : readData?.subscription_id,
						book_purchased : bookPurchased
			    }
			  }));
				// console.log("fullAccessfullAccess",fullAccess)
				// console.log("Current Page",currentPage)
				if(!full_access){
					if(currentPage == 5){
						setRestrictReader(true)
					}
				}
				else{
					// 
				}
			}
		} 
		// 
	};

	
	/**
	 * Set toc
	 * @param toc Table of Epub contents
	 */
	const onTocChange = (toc: Toc[]) => dispatch(updateToc(toc));

	/** 
	 * Set Epub viewer styles
	 * @param bokkStyle_ viewer style
	 */
	const onBookStyleChange = (bookStyle_: BookStyle) => setBookStyle(bookStyle_);

	/** 
	 * Set Epub viewer options
	 * @param bookOption_ viewer option
	 */
	 const onBookOptionChange = (bookOption_: BookOption) => setBookOption(bookOption_);

	/**
	 * Change current page
	 * @param page Epub page
	 */
	const onPageChange = (page: Page) => dispatch(updateCurrentPage(page));

	/** 
	 * ContextMenu on 
	 * @param cfiRange CfiRange
	 */
	const onContextMenu = (cfiRange: string) => {
		const result = onSelection(cfiRange);
		setIsContextMenu(result);
	}

	/** ContextMenu off */
	const onContextmMenuRemove = () => setIsContextMenu(true);

  return (<>
	
  { restrictReader ? 
   <div className="my-6 mx-auto sm:px-16 xl:px-16 w-full lg:w-[90%] md:w-full xs:w-full " >
	<ReaderRestrication handle={handle}></ReaderRestrication>
   </div>
   :
   <div className="epub my-6 mx-auto bg-[#f2f9f7] xl:w-[90%] 2xl:w-[90%] w-full lg:w-[90%]  md:w-full xs:w-full  rounded-xl border  text-center max-h-screen-xl lg:flex-row lg:text-left" style={{ height: "95vh", overflow: "hidden" }}>
		
		<Modal isOpen={state} close={close} size="xs"> 
        <Modal.Body>         
          <div className="text-[#015464] font-black text-xl text-center ">  {product?.title}</div>
          <div className="w-full  p-4 mt-10 text-center" >
            This book you have already readed {readPercentage}%.
          </div>         
        </Modal.Body>

		
        <Modal.Footer>
        <div className="flex-1 flex no-scrollbar flex-col gap-1 justify-center md:flex-row">
            <button onClick={readFromStartOver} className="w-full bg-secondry font-bold  inline-flex items-center justify-center rounded-full border-2 border-transparent px-2 py-3 md:w-[160px] text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 " > Start over</button>
            <button disabled={readPercentage == 100 ? true : false}  onClick={()=>onLocationChange(continueHref)} className={`w-full font-bold inline-flex items-center justify-center rounded-full border-2 border-transparent bg-primary px-2 py-3 md:w-[200px] text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 ${readPercentage == 100 ? 'cursor-not-allowed opacity-50' : ''}`} > Continue reading</button>
          </div>
        {/*<div className="overflow-y-scroll flex-1 no-scrollbar p-2">
          </div>*/}
          
        </Modal.Footer>
      </Modal>
		<div className="flex">
		<ViewerWrapper>
			<Header 
						onNavToggle={onNavToggle}
						onOptionToggle={onOptionToggle}
						onLearningToggle={onLearningToggle}
						onReportBookToggle={onReportBookToggle}
						arrowsRestrication={arrowsRestrication}
						
					/>

			<ReactEpubViewer 
						url={url}
						viewerLayout={viewerLayout}
						viewerStyle={bookStyle}
						viewerOption={bookOption}
						onBookInfoChange={onBookInfoChange}
						onPageChange={onPageChange}
						onTocChange={onTocChange}
						onSelection={onContextMenu}
						loadingView={loadingView || <LoadingView />}
						ref={viewerRef}
					/>
			
					<Footer 
						title={currentLocation.chapterName}
						currentPage={currentPage}
						totalPage={totalPage}
						onPageMove={onPageMove}
					/>
			</ViewerWrapper>

			<Nav
					control={navControl}
					onToggle={onNavToggle}
					onLocation={onLocationChange}
					ref={navRef}
					arrowsRestrication={arrowsRestrication}
				/>
			
			<Option 
					control={optionControl}
					bookStyle={bookStyle}
					bookOption={bookOption}
					bookFlow={bookOption.flow}
					onToggle={onOptionToggle} 
					emitEvent={emitEvent}
					onBookStyleChange={onBookStyleChange}
					onBookOptionChange={onBookOptionChange}
					ref={optionRef}
				/>

				<Learning 
					control={learningControl}
					onToggle={onLearningToggle}
					onClickHighlight={onClickHighlight}
					emitEvent={emitEvent}
					viewerRef={viewerRef}
					ref={learningRef}
				/>		

				<ReportBook
					control={reportBookToggle}
					onToggle={onReportBookToggle}
					onLocation={onLocationChange}
					ref={navRef}
					arrowsRestrication={arrowsRestrication}
				/>		

				<ContextMenu
					active={isContextMenu}
					viewerRef={viewerRef}
					selection={selection}
					onAddHighlight={onAddHighlight}
					onRemoveHighlight={onRemoveHighlight}
					onUpdateHighlight={onUpdateHighlight}
					onContextmMenuRemove={onContextmMenuRemove}
				/>

				<Snackbar />
		</div>
 </div>

}
  </>);
}

const ReaderWrapper = ({ url, loadingView , totalPage , full_access , handle ,readData , product , arrowsRestrication, bookPurchased}: Props) => {
	return (
		<Provider store={store}>
			<Reader url={url} loadingView={loadingView} totalPage={totalPage} full_access = {full_access} handle={handle} readData={readData} bookPurchased={bookPurchased} product={product} arrowsRestrication={arrowsRestrication}/>
		</Provider>
	);
}

interface Props {
	url: string;
	handle: string;
	loadingView?: React.ReactNode;
	totalPage: Number;
	full_access: Boolean;
	readData : Object;
	product : Object;
	arrowsRestrication : Boolean;
}

export default ReaderWrapper