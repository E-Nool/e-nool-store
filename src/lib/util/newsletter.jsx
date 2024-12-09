// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'

var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const addNewsletterSubscriber = async (data = {}) => {
  try {
    if(!data){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/newsletter`;

    const postData = {...data};
    const response = await axios.post(apiUrl, postData);

    return response.data;
  } catch (error) {
    console.error('Error saving feed back:', error);
    throw error;
  }
};