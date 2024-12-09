// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'


var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const updateProfileImage = async (customer_id = '', formData = null) => {
  try {
    if(!customer_id || !formData){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/profile?customer_id=${customer_id}`;

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const response = await axios.post(apiUrl, formData, config);
    return response.data;
  } catch (error) {
    console.error('Error saving wishlist:', error);
    throw error;
  }
}

export const deleteProfileImage = async (customer_id = '') => {
  try {
    if(!customer_id){
      throw "customer_id field is required";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/profile?customer_id=${customer_id}`;

    const response = await axios.delete(apiUrl);
    return response.data;
  } catch (error) {
    // console.error('Error saving bookshelf product:', error);
    throw error;
  }
}