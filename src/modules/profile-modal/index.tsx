//@ts-nocheck
import React, { useEffect, useState } from "react"
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
// import { addReportBook } from "@lib/util/products_api";
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal"
import ProfileImg from "@public/images/profile.png";
import Image from "next/image";
import {updateProfileImage, deleteProfileImage} from "@lib/util/profile";

const UpdateProfileModal = ({customer, reload = true}) => {
	const { state, open, close } = useToggleState(false)
	const [profile, setProfile] = useState(ProfileImg)
	const [file, setFile] = useState(null)
	const hasProfile = customer?.metadata?.profile_image ? true : false
	const [alert, setAlert] = useState(false)

	const handleChange = (event) => {
	    setFile(event.target.files[0])
	}

	useEffect(() => {
		if(hasProfile){
			const img_uri = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost'}/store/profile?customer_id=${customer?.id}&v=${new Date().getTime()}`;
			setProfile(img_uri);
		}
	}, [customer]);

	const handleClose = () => {   
	    close()
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		if(customer){
			const formData = new FormData();
			formData.append('profile', file || '');
			const res = await updateProfileImage(customer?.id, formData);
			if(res?.status){
				
				updateImages('', true);

				if(reload){
					setTimeout(() => {
						window.location.reload();
					}, 1000)
				}else{
					close()
				}
			}else{
				setAlert(res?.message)
			}
		}
	}

	const removeProfile = async () => {
		const res = await deleteProfileImage(customer?.id)
		if(res?.status){
			// setProfile(ProfileImg)
			updateImages(ProfileImg?.blurDataURL, false);
			if(reload){
				setTimeout(() => {
					window.location.reload();
				}, 1000)
			}else{
				close()
			}
		}
	}

	const updateImages = (url = '', status = false) => {
		let img_src = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost'}/store/profile?customer_id=${customer?.id}`;
		const profiles = document.querySelectorAll('.user-profile-image');
		profiles.forEach((__img) => {
			if(url){
				img_src = url;
			}
			__img.setAttribute('src', img_src+'&v='+new Date().getTime());
			__img.setAttribute('srcset', img_src+'&v='+new Date().getTime());
		})
		document.dispatchEvent(new CustomEvent("user:profile:updated", {
		    detail: { 
		    	has_profile :  status
		    }
		}));
	}



	// console.log(customer)

	return (
		<>
		    <button className="m-auto md:w-[auto] block md:inline-block text-center bg-[#015464] mt-5 p-2 px-8 rounded-3xl text-white"
               onClick={open}>Edit Profile</button>
			<Modal isOpen={state} close={handleClose}>
		        <Modal.Title >
		          <h2 className="text-xl font-bold">Edit Profile Image</h2>
		          </Modal.Title>
		        <Modal.Body>
			        <div className="mt-10">
			        	<Image
			                className="object-cover m-auto  bg-[#7CC9B5] rounded-full w-[150px] h-[150px] user-profile-image"
			                src={profile}
			                width="150"
			                height="150"
			                alt="Profile-img"
			            />
			        </div>
			        <div>
			        	{alert && <p className="text-center text-[#E81D1D]">{alert}</p>}
			        </div>
			        <div className="mt-5">
				        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
				        	<input type="file" onChange={handleChange}/>
				        	<div>
						        <button type="submit" className="md:w-[auto] block md:inline-block text-center bg-[#015464] mt-5 p-2 px-8 rounded-3xl text-white">
							        Update
							    </button>
				        		{hasProfile ? (
							    	<button onClick={removeProfile} type="button" className="ml-2 md:w-[auto] block md:inline-block text-center bg-[#E81D1D] mt-5 p-2 px-8 rounded-3xl text-white">
								        Remove
								    </button>
							    ) : null}
				        	</div>
						    
						</form>
			        </div>
		        </Modal.Body>            
		    </Modal>
		</>
	)
}
export default UpdateProfileModal;