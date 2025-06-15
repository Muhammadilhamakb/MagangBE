import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://ybstudio-production.up.railway.app/product';

export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data;
  } catch (err) {
    console.error('Gagal fetch produk:', err);
    return [];
  }
};

export const saveProducts = async (newProducts) => {
  try {
    const res = await axios.post(`${API_URL}/upload`, formData);
    return res.data;
  } catch (err) {
    console.error('Gagal simpan produk:', err);
    return { success: false };
  }
};

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const res = await axios.post(`${API_URL}/upload`, formData); // <== PENTING HARUS /upload
      return res.data.imageUrl;
    } catch (error) {
      console.error("❌ Upload gagal:", error.message);
      throw error;
    }
  };
  
  
