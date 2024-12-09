// @ts-nocheck

import Marquee from "react-fast-marquee";


const  AnnouncementBar = ({text}) => {
	const max = 20;
	const stack = [];
	for(let i = 0; i < max; i++){
		stack.push(<div className="me-14">{text}</div>);
	}
	return (
		<Marquee className="text-white bg-[#1a5f5f] py-1 z-10 text-sm">
			{stack}
		</Marquee>
	);

}
export default AnnouncementBar;

