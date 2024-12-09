import styled from 'styled-components'
// lib
import * as styles from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'
import preferences from "@modules/common/icons/preferences.svg"
import fontpreferences from "@modules/common/icons/fontpreferences.svg"
import bookmark from "@modules/common/icons/bookmark.svg"
import fullscreen from "@modules/common/icons/fullscreen.svg"
import moreoption from "@modules/common/icons/moreoption.svg"
import Image from 'next/image'

const ControlBtn = ({ message, onClick }: Props) => {
  return( <> 
    { message == "Content" && <Btn onClick={() => onClick()} >
				<Image src={preferences} alt="Back" className="  w-5 items-center" />
		</Btn>}
    { message == "Setting" && <Btn onClick={() => onClick()} >
      <Image src={fontpreferences} alt="Back" className="  w-4 items-center" />      
		</Btn>}
    { message == "Highlights" && <Btn onClick={() => onClick()} >
      <Image src={bookmark} alt="Back" className="  w-3 items-center" />
		</Btn>}
    { message == "More" && <Btn onClick={() => onClick()} >
      <Image src={moreoption} alt="Back" className="  w-4 items-center" />
		</Btn>}
    { message == "Zoom" && <Btn onClick={() => onClick()}>
      <Image src={fullscreen} alt="Back" className="  w-4 items-center" />
		</Btn>}
  </>
  )

}

const Btn = styled.button`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .1s ${styles.transition};
  outline: none;
  margin-left: 15px;
  width: 30px;
  height: 30px;
  &:focus, &:hover {
    color: ${palette.blue3};
      background-color: #d7e3ff;
   
  }

  &:first-child {
    margin-left: 8px;
  }
 
`;

interface Props {
  message: string;
  onClick: (value?: boolean) => void;
}

export default ControlBtn