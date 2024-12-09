// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'

export const dateConvertor = (number = "", type = "month") =>{
    const om = 30;
    const oy = 365;
    const num  = parseInt(number);
    let result = 0;
    switch(type){
	    case "month":
	    	result = num * om;
	    	break;
	    case "year":
	    	result = num * oy;
	    	break;
	    default:
	    	result = num;
    }
	return result;
}

export const statusConvertor = (no = "") => {
	let result = "";
	switch(no){
	    case 0:
	    	result = "Active";
	    	break;
	    case 2:
	    	result = "Cancelled";
	    	break;
	    default:
	    	result = "Expired";
    }
	return result;
}