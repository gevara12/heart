import axios from 'axios';

class AxiosService {
  private instance: any;

  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);

    instance.interceptors.request.use(
      (config) => {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token; // for Spring Boot back-end
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    const originalConfig = error.config;
    const refreshToken = sessionStorage.getItem('refreshToken');

    if (
      originalConfig.url !== '/token/' &&
      error.response &&
      error.response.status === 401 &&
      !originalConfig._retry &&
      refreshToken
    ) {
      originalConfig._retry = true;

      try {
        this.instance
          .post('/auth/refreshtoken', {
            refreshToken: refreshToken,
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              sessionStorage.setItem('accessToken', res.data.accesstoken);
              originalConfig.headers.Authorization = `Bearer ${res.data.accesstoken}`;
              return axios(originalConfig);
            }
          })
          .catch((err) => {
            if (err.response.data.error === 'Please Login or Register') {
              // refresh token has expries
              sessionStorage.removeItem('accessToken');
              sessionStorage.removeItem('refreshToken');
            }
          });
      } catch (_error) {
        return Promise.reject((_error.response && _error.response.data) || 'Something went wrong');
      }
    }
    return Promise.reject((error.response && error.response.data) || 'Something went wrong');
  }

  get(url, ...params) {
    return this.instance.get(url, params);
  }

  post(url, body, ...config) {
    return this.instance.post(url, body, config);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();
