import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const fetchTests = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tests`);
    return response.data;
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error;
  }
};
