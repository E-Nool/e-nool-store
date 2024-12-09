// utils/medusaApi.js
import axios from 'axios';


var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const fetchAllCurrentReading = async (customer_id) => {
  try {
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/bookreadpercentage?customer_id=${customer_id}&type=all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getBookReading = async (customer_id,book_id,subscriber_id = null, type = 'single') => {
  try {
    let endpoint = `/store/bookreadpercentage?book_id=${book_id}&customer_id=${customer_id}&type=${type}`;
    if(subscriber_id){
      endpoint = endpoint+`&subscriber_id=${subscriber_id}`
    }
    const response = await axios.get(`${MEDUSA_API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Details:', error);
    throw error;
  }
};

export const updateBookReading = async (data = {}) => {
  try {
    if(!data){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/bookreadpercentage`;

    const postData = {...data};

    const response = await axios.post(apiUrl, postData);
    return response.data;
  } catch (error) {
    console.error('Error updating book reading:', error);
    throw error;
  }
}


export const checkPurchasedBookOrder = async (customer_id = '', book_id = '') => {
  try {
    let endpoint = `/store/book-purchased?book_id=${book_id}&customer_id=${customer_id}`;
    const response = await axios.get(`${MEDUSA_API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Details:', error);
    throw error;
  }
}