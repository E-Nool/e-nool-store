// components
import Wrapper from '../components/header/Wrapper'
import Layout, { AutoLayout } from '../components/header/Layout'
import Logo from '../components/header/Logo'
import ControlBtn from '../components/header/ControlBtn'
import { useState } from 'react'

const Header = ({
  onNavToggle, 
  onOptionToggle, 
  onReportBookToggle,
  onLearningToggle
}: Props) => {

  const [fullScreen, setFullScreen] = useState(false);

  function openFullscreen() {
    let elem = document.documentElement;
    if(!fullScreen){
      let methodToBeInvoked = elem.requestFullscreen ||
        elem.requestFullscreen || elem['mozRequestFullscreen']
        ||
        elem['msRequestFullscreen'];
      if (methodToBeInvoked){
        methodToBeInvoked.call(elem);
        setFullScreen(true);
      } 
    }
    else{
      if (document.exitFullscreen) {
        document.exitFullscreen();  
        setFullScreen(false);
      }
    }
  }

  
  return (
    <Wrapper className='contanier pl-5'>
      <Layout>
        <AutoLayout >
          <Logo onClick={onNavToggle}/>
          <div>            
            <ControlBtn message="Setting" onClick={onOptionToggle} />
            <ControlBtn message="Highlights" onClick={onLearningToggle} />
            <ControlBtn message="More" onClick={onReportBookToggle} />
            <ControlBtn message="Zoom" onClick={openFullscreen} />
          </div>
        </AutoLayout>
      </Layout>
    </Wrapper>
  );
}

interface Props {
  onNavToggle: (value?: boolean) => void;
  onOptionToggle: (value?: boolean) => void;
  onLearningToggle: (value?: boolean) => void;
  onReportBookToggle: (value?: boolean) => void;
}

export default Header