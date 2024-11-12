import axios from 'axios';

const API_BASE_URL = 'http://pnczeus.dumiya.online:54321/';

export const login = async () => {
  try {
    // First, authenticate with the hardcoded username and password
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username: 'dumi',
      password: 'dumi',
    }, {
      headers: {
        'Accept': 'application/json',
      }
    });

    // If login is successful, Axios will store the session automatically
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const getClientData = async (clientName) => {
  try {
    // Now that we are authenticated, make a request to get client data
    const response = await axios.post(`${API_BASE_URL}/panel/api/inbounds/clientIps/${clientName}`, {
      headers: {
        'Accept': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    console.error('Failed to get client data:', error);
    throw error;
  }
};
