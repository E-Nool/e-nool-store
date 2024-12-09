import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'
import { mediaQuery } from '../../lib/styles/media'
import { useRouter } from "next/navigation"
import backbutton from "@modules/common/icons/backbutton.svg"
import Image from 'next/image'
import ControlBtn from './ControlBtn'

// export const BackButton = () => {
//   const router = useRouter()
//   return (
//     <button
//       className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90"
//       onClick={() => router.back()}
//     >
//       Back
//     </button>
//   )
// }


const Logo =  ({ onClick }: Props)  => {
	const router = useRouter()
	return (
		<>
		<Wrapper >
			<a onClick={() => router.back()} target="__blank__">
				<Image width={10} height={10} src={backbutton} alt="Back" className="w-2 items-center" />
			</a>				
			<ControlBtn message="Content" onClick={onClick} />	
		</Wrapper>
		 
		 </>
	);
}

const Wrapper = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	margin-left: 16px;
	background-color: rgba(0,0,0,0);
	transition: .2s ${styles.transition};
	border-radius: 8px;
	padding: 4px 8px;
	cursor: pointer;

	${mediaQuery(700)} {
		display: none;
	}

	
`;

const Img = styled.img`
	height: 44px;
`;

interface Props {
	onClick: (value?: boolean) => void;
  }
  

export default Logo