// utils/medusaApi.js
import axios from 'axios';
import * as qs from 'qs'

import Medusa from "@medusajs/medusa-js"

// const MEDUSA_API_BASE_URL = 'https://enool.orcans.site';
var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}



/**
 * Fetches a product by handle, using the Medusa API or the Medusa Product Module, depending on the feature flag.
 * @param id (string) - The id of the product to retrieve
 * @param fields (string) - The return fields
 * @returns (array) - An array of products (should only be one)
 */



export const resetPasswordRequest = async (email = '') => {
  // console.log(email)
  // const medusa = new Medusa({ baseUrl: MEDUSA_API_BASE_URL, maxRetries: 3 })
  // medusa.customers.generatePasswordToken({
  //   email: email
  // })
  // .then((res) => {
  //  //  console.log(res)
  //  // return true
  //   return res.json()
  // })
  // .then((res) => {
  //   console.log(res)
  //  // return true
  //   // return res.json()
  // })
  // .catch(() => {
  //   return false
  // })
  try {
    if(!email){
      throw "Please fill all required fields";
    }

    const apiUrl = `${MEDUSA_API_BASE_URL}/store/customers/password-token`;

    const postData = {
      email
    };

    const response = await axios.post(apiUrl, postData);
    // console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error resetting password :', error);
    throw error;
  }
};

export const resetPassword = async (data = {}) => {
  try {
    const apiUrl = `${MEDUSA_API_BASE_URL}/store/customers/password-reset`;

    const response = await axios.post(apiUrl, data);
    // console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error resetting password :', error);
    // throw error;
    return error?.response && error?.response?.data
 ? error.response?.data : error;
  }
};

export const getCustomer = async () => {
  const medusa = new Medusa({ baseUrl: MEDUSA_API_BASE_URL, maxRetries: 3 })
  try{
    const data = await medusa.customers.retrieve();
    return data;
  }catch(error){
    console.error("Error : " + error)
  }

}

export const checkUserName = async (uname = '') => {
  try {
    const response = await axios.get(`${MEDUSA_API_BASE_URL}/store/check-username?user_name=${uname}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user name availability:', error);
    throw error;
  }
}
// export const resetPasswordRequest = async (email ) => {
//   var config = {
//     method: 'post',
//     url:`${MEDUSA_API_BASE_URL}/store/customers/password-token`,
//     data: qs.stringify({email:email}),
//     headers: { 
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   };
//   await axios(config) .then(function (response) {
//    console.log(response)
//    })
//    .catch(function (error) {
//     console.log(error)
//    });
  
// };
