import axios from 'axios';

const API = 'https://restcountries.com/v2';

export const getCountries = async () => {
  try {
    const res = await axios.get(`${API}/all`);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};
