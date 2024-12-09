import axios from 'axios';
import * as qs from 'qs'


// const MEDUSA_API_BASE_URL = 'https://enool.orcans.site';
var MEDUSA_API_BASE_URL = 'http://localhost';
if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_API_BASE_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}
const ENOOL_ADMIN_BASE_URL = 'https://admin.enool.in'
const LOCAL_ADMIN_BASE_URL = 'http://localhost:3000'


export const add_publisher = async (data ) => {
    var config = {
      method: 'post',
      url:`${ENOOL_ADMIN_BASE_URL}/publisher/send-req-form`,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
     
    };
    await axios(config) .then(function (response) {
      return response.data
     })
     .catch(function (error) {
      throw error
     });
    
  };
export const add_author = async (data ) => {
    var config = {
      method: 'post',
      url:`${ENOOL_ADMIN_BASE_URL}/author/send-req-form`,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
     
    };
    await axios(config) .then(function (response) {
      return response.data
     })
     .catch(function (error) {
      throw error
     });
  };
// export const add_reviewer = async (data) => {
//   try {

//     const response = await axios.post('http://localhost:3000/user/send-quality-analyst-form', data);

//     console.log('Server Response:', response.data);

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
//   };
  export const add_reviewer = async (data) => {
    try {
      var config = {
        method: 'post',
        url: `${ENOOL_ADMIN_BASE_URL}/user/send-quality-analyst-form`,
        data: data,
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type to application/json
        },
      };
  
      const response = await axios(config);
  
      console.log('Server Response:', response.data);
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };