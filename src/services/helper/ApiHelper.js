import axios from 'axios';

const getToken = () => {
  const authToken = localStorage.getItem('authToken');
  return authToken;
};

export class ApiHelper {
  async get(uri, params) {
    var authToken = getToken();
    const response = await axios.get(uri, {
      params: params ? { ...params } : {},
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response;
  }
  async getWithData(uri, data){
    var authToken = getToken();
    const response = await axios.get(uri, {
      data: data ? { ...data } : {},
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response
  }
  async post(uri, data) {
    var authToken = getToken();
    const response = await axios.post(uri, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type' : "application/json"
      },
    });
    return response;
  }
  async delete(uri,data,params) {
    var authToken = getToken();
    const response = await axios.delete(uri, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      params : params ? params : {},
      data : data ? data : {}
    });
    return response;
  }
  async put(uri, data) {
    var authToken = getToken();
    const response = await axios.put(uri, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response;
  }
  async postFormData(uri, data) {
    var authToken = getToken();
    const response = await axios.post(uri, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'multipart/form-data',
      },
    });
    return response;
  }
  async putFormData(uri, data) {
    var authToken = getToken();
    const response = await axios.put(uri, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'multipart/form-data',
      },
    });
    return response;
  }

  async postWithBlob(uri, data) {
    var authToken = getToken();
    const response = await axios.post(uri, data, {
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response;
  }

  async update(uri, data) {
    var authToken = getToken();
    const response = await axios.put(uri, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response;
  }

  // handleError(error) {
  //   if (error.response && error.response.status) {
  //     switch (error.response.status) {
  //       // case 401:
  //       //   window.location.href = `/`;
  //       //   return Promise.reject(error.response.data);
  //       case 400:
  //         window.location.href = `/`;
  //         return Promise.reject(error.response.data);
  //       case 404:
  //         return Promise.reject(error.response);
  //       default:
  //         let err = new Error(error.response);
  //         return Promise.reject(err);
  //     }
  //   } else {
  //     let err = new Error(error.response);
  //     return Promise.reject(err);
  //   }
  // }
}
