// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'


var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

const ENOOL_ADMIN_BACKEND_URL = process.env.ENOOL_ADMIN_BACKEND_URL || 'https://admin.enool.in';
 
export const fetchAuthors = async () => {
  try {
    const response = await axios.get(`${ENOOL_ADMIN_BACKEND_URL}/user/author-list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};

export const fetchPublishers = async () => {
  try {
    const response = await axios.get(`${ENOOL_ADMIN_BACKEND_URL}/user/publisher-list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};