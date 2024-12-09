// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'


var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const fetchSubscriptions = async () => {
  try {
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/subscriptions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchMySubscriptions = async (customer_id) => {
  try {
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/my-subscriptions?customer_id=${customer_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Details:', error);
    throw error;
  }
};

export const cancelSubscription = async (subscriber_id = '', customer_id = '') => {
  try{
    if(!subscriber_id || !customer_id) throw "Subscription ID or Customer ID not found";
    const apiUrl = `${MEDUSA_API_BASE_URL}/store/cancel-subscription`;

    const postData = {
      subscriber_id,
      customer_id
    };

    const response = await axios.post(apiUrl, postData);
    return response.data;
  }catch(err){
    console.error('Error deleting subscription:', err);
    throw err;
  }
}

export const createRazSubscription = async (plan_id, subscription_id, customer_id) => {
  try{
    if(!plan_id || !subscription_id || !customer_id) throw "Please fill all required fields";
    const apiUrl = `${MEDUSA_API_BASE_URL}/store/razorpay/create-subscription`;

    const postData = {
      plan_id,
      subscription_id,
      customer_id
    };

    const response = await axios.post(apiUrl, postData);
    return response.data;
  }catch(err){
    console.error('Error deleting subscription:', err);
    throw err;
  }
}

export const getRazDraftSubscription = async (customer_id) => {
  try{
    if(!customer_id) throw "Please fill all required fields";
    const apiUrl = `${MEDUSA_API_BASE_URL}/store/razorpay/get-draft?customer_id=${customer_id}`;

    const response = await axios.get(apiUrl);
    return response.data;
  }catch(err){
    console.error('Error deleting subscription:', err);
    throw err;
  }
}

export const cancelRazorpaySubscription = async (subscriber_id = '', customer_id = '') => {
  try{
    if(!subscriber_id || !customer_id) throw "Subscription ID or Customer ID not found";
    const apiUrl = `${MEDUSA_API_BASE_URL}/store/razorpay/cancel-subscription`;

    const postData = {
      subscriber_id,
      customer_id
    };

    const response = await axios.post(apiUrl, postData);
    return response.data;
  }catch(err){
    console.error('Error deleting subscription:', err);
    throw err;
  }
}