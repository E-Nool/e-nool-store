// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'


var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const fetchWishlists = async (customer_id = '') => {
  try {
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/wishlist?customer_id=${customer_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    throw error;
  }
}


export const addWishlist = async (customer_id = '', book_id = '') => {
  try {
    if(!customer_id || !book_id){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/wishlist`;

    const postData = {
      customer_id : customer_id,
      book_id : book_id
    };

    const response = await axios.post(apiUrl, postData);
    return response.data;
  } catch (error) {
    console.error('Error saving wishlist:', error);
    throw error;
  }
}

export const deleteWishlist = async (w_id = '') => {
  try {
    if(!w_id){
      throw "Wishlist ID Required";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/wishlist`;

    const response = await axios.delete(apiUrl, {
      data : {
        "id" : w_id
      }
    });
    return response.data;
  } catch (error) {
    // console.error('Error saving bookshelf product:', error);
    throw error;
  }
}