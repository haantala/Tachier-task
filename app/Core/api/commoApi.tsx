import axios from 'axios';
import Request from '.';
import { ApiRoutes } from '../constants';

export const handleLoginApi = async (data) => {
    const res = await Request.post(ApiRoutes.LOGIN, data);
    return res;
}

export const handleGetUsersApi = async () => {
    const res = await Request.post(ApiRoutes.GETUSERS);
    return res;
}