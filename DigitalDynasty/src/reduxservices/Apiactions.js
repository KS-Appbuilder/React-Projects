import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios for making HTTP requests

export const getProducts = createAsyncThunk('fetchdata', async () => {
  try {
    const url = 'https://fakestoreapi.com/products/category/electronics';
    const response = await axios.get(url); // Await the axios call and store response

    // console.log(response);
    return response.data; // Return the data from the response
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the slice
  }
});
export const deleteProducts = createAsyncThunk('deleteData', async id => {
  try {
    const url = 'https://fakestoreapi.com/products/category/electronics';
    const response = await axios.delete(`${url}/${id}`); // Corrected URL with ${id}
    return response.data; // Return the data from the response if needed
  } catch (error) {
    console.log(error); // Log the error
    throw error; // Rethrow the error to handle it in the slice or component
  }
});
