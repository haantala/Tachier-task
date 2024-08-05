import Axios from 'axios';

import { ApiRoutes } from '../constants';

export const axios = Axios.create({// (NOTE: this will disable client verification)
    baseURL: ApiRoutes.API_HOSTNAME,
    timeout: 1000000000,

    responseType: 'json',
});

axios.interceptors.request.use(
    async (config) => {
        config.headers = {
            Accept: 'application/json , */*',
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJyb2xlIjoic3RyaW5nIn0.GBqjV5jNZopK88zcWeWeDLPdnN5QFOWs7ym9zxBOKrY`,
        };
        return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response?.data,
    (error) => {
        if (error.response.status === 403) {
            window.location.replace('/');
        }
        return Promise.reject(error);
    }
);

export default axios;
