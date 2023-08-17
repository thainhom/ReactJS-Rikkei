import api, { getHeaders } from './api';

const searchUsers = async (params = {}) => {
    return await api.get(`/users`, { params: params, headers: getHeaders() })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error('API Error', error);
            throw error;
        });
}

const createUser = async (requestBody) => {
    return await api.postForm('/users', requestBody, { headers: getHeaders() })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error('API Error', error);
            throw error;
        });
}

const getUserByUserId = async (user_id) => {
    return await api.get(`/users/${user_id}`, { headers: getHeaders() })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error('API Error', error);
            throw error;
        });
}

const updateUser = async (user_id, requestBody) => {
    return await api.putForm(`/users/${user_id}`, requestBody, { headers: getHeaders() })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error('API Error', error);
            throw error;
        });
}

const deleteUser = async (user_id) => {
    return await api.delete(`/users/${user_id}`, { headers: getHeaders() })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error('API Error', error);
            throw error;
        });
}

export default {
    searchUsers,
    createUser,
    getUserByUserId,
    updateUser,
    deleteUser,
};
