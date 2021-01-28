import axios from 'axios';

const url='http://api.thuematbang24h.com/';
export async function handleGet(endpointApi, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = url + endpointApi;
        const response = await axios.get(endpoint, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function handleSubmit(endpointApi, data, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = url + endpointApi;
        const response = await axios.post(endpoint, data, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function handleUpdate(endpointApi, data, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = url + endpointApi;
        const response = await axios.put(endpoint, data, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function handleDelete(endpointApi, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = url + endpointApi;
        const response = await axios.delete(endpoint, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function login(endpointApi, data) {
    try {
        const config = {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
        };
        let endpoint = url + endpointApi;
        const response = await axios.post(endpoint, data, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}