// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'

// const MEDUSA_API_BASE_URL = 'https://enool.orcans.site';
var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const fetchBookshelves = async (customer_id = null, bookshelf_id = null) => {
  try {
  	if(!customer_id){
  		throw "Customer ID Required";
  	}
    const  url = `${MEDUSA_API_BASE_URL}/store/bookshelf?customer_id=${customer_id}`+((bookshelf_id) ? `&bookshelf_id=${bookshelf_id}` : '')
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching bookshelves:', error);
    throw error;
  }
};

export const addBookshelves = async (customer_id = "", name = "", description = "") => {
  try {
    if(!customer_id || !name || !description){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/bookshelf`;

    const postData = {
      customer_id : customer_id,
      name : name,
      description : description
    };

    const response = await axios.post(apiUrl, postData);
    return response.data;
  } catch (error) {
    console.error('Error saving bookshelves:', error);
    throw error;
  }
};

export const addBookshelfProduct = async (data = {}) => {
  try {
    if(!data){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/bookshelfitems`;

    const postData = {...data};

    const response = await axios.post(apiUrl, postData);
    return response.data;
  } catch (error) {
    console.error('Error saving bookshelf product:', error);
    throw error;
  }
};

export const fetchBookshelfProducts = async (bookshelf_id) => {
  try {
    if(!bookshelf_id){
      throw "Bookshelf ID Required";
    }
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/bookshelfitems?bookshelf_id=${bookshelf_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bookshelves:', error);
    throw error;
  }
}

export const deleteBookshelf = async (bookshelf_id) => {
  try {
    if(!bookshelf_id){
      throw "Bookshelf ID Required";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/bookshelf`;

    const response = await axios.delete(apiUrl, {
      data : {
        "id" : bookshelf_id
      }
    });
    return response.data;
  } catch (error) {
    // console.error('Error saving bookshelf product:', error);
    throw error;
  }
}

export const deleteBookshelfItem = async (item_id) => {
  try {
    if(!item_id){
      throw "Bookshelf Item ID Required";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/bookshelfitems`;

    const response = await axios.delete(apiUrl, {
      data : {
        "id" : item_id
      }
    });
    return response.data;
  } catch (error) {
    // console.error('Error saving bookshelf product:', error);
    throw error;
  }
}

export const updateBookshelf = async (data = {}) => {
  try {
    if(!data){
      throw "Data not found";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/bookshelf`;

    const response = await axios.put(apiUrl, data);
    return response.data;
  } catch (error) {
    // console.error('Error saving bookshelf product:', error);
    throw error;
  }
}