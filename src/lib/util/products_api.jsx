// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs';
// import { useAdminProductCategories } from "medusa-react"



var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const fetchProducts = async (offset = 1, limit = 10, category_id = [] , orderBy = "created_at", q = '') => {
  try {
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/products`, {
      params: {
        offset ,
        limit,
        category_id : category_id,
        order: orderBy,  // Order in ascending fashion
        q : q
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetches a product by handle, using the Medusa API or the Medusa Product Module, depending on the feature flag.
 * @param id (string) - The id of the product to retrieve
 * @param fields (string) - The return fields
 * @returns (array) - An array of products (should only be one)
 */

export const getProductById = async ( id, fields) => {
  try {
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/products/${id}`, {
      params: {
        expand:"categories",
        fields:fields
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};



export const addWishlist = async (customer_id = "",variant_id = "", quantity = 1) => {
    var data = JSON.stringify({
      "variant_id" :variant_id,
      "quantity" : 1,
      "region_id": "reg_01HFGMCPNX5Z6S05XYFZPJKPYX"    
    });
    
    var config = {
      method: 'post',
      url:`${MEDUSA_API_BASE_URL}/store/customers/${customer_id}/wishlist`,
      headers: { 
        'Content-Type': 'application/json', 
      },
      data : data
    };
     
    await axios(config) .then(function (response) {
      console.log(response.data)
      // return true
     })
     .catch(function (error) {
       return error;
     });
};

export const removeWishlist = async (customer_id ,index ) => {
  var data = JSON.stringify({
    "index": index
  });
  
  var config = {
    method: 'delete',
    url: `${MEDUSA_API_BASE_URL}/store/customers/${customer_id}/wishlist`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  await axios(config)
  .then(function (response) {
   return true
  })
  .catch(function (error) {
    return error;
  });
};


export const getReviews = async (productId ) => {
  try {
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/products/${productId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


export const addReviews = async (data,productId ) => {
  var config = {
    method: 'post',
    url:`${MEDUSA_API_BASE_URL}/store/products/${productId}/reviews`,
    data: qs.stringify(data),
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
   
  await axios(config).then(function (response) {
    return response;
   })
   .catch(function (error) {
    console.log(error)
   });
  
};

export const addReportBook = async (data ) => {
  var config = {
    method: 'post',
    url:`${MEDUSA_API_BASE_URL}/store/reportbook`,
    data: qs.stringify(data),
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  await axios(config) .then(function (response) {
   console.log(response)
   })
   .catch(function (error) {
    console.log(error)
   });
  
};


export const addContactMessage = async (data ) => {
  var config = {
    method: 'post',
    url:`${MEDUSA_API_BASE_URL}/store/contactus`,
    data: qs.stringify(data),
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  await axios(config) .then(function (response) {
   console.log(response)
   })
   .catch(function (error) {
    console.log(error)
   });
  
};

export const getProductCategories = async (q = '') => {
  try {
    let endpoint = `${MEDUSA_API_BASE_URL}/store/product-categories`;
    endpoint = (q) ? endpoint+'?q='+q : endpoint;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}
