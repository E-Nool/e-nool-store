// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'


var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const sendOtp = async function(customer_id = '', resend = false, mail = false){
  try {
    if(!customer_id){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/email/send-otp`;

    const postData = {
      customer_id,
      resend,
      mail
    };

    const response = await axios.post(apiUrl, postData);
    return response.data;
  } catch (error) {
    console.error('Error saving wishlist:', error);
    throw error;
  }
}

export const validateOtp = async function(customer_id = '',otp = null){
  try {
    if(!customer_id || !otp){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/email/otp/check`;

    const postData = {
      customer_id,
      otp
    };

    const response = await axios.post(apiUrl, postData);
    return response.data;
  } catch (error) {
    console.error('Error saving wishlist:', error);
    throw error;
  }
}