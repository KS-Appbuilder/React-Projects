// // import {combineReducers} from 'redux';
// // import {ActionerPerformer, DarkMode} from './reducer';

// // export default combineReducers({
// //   ActionerPerformer,
// //   DarkMode,
// // });
// //
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiMethods = createApi({
  reducerPath: 'apiMethods',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
  endpoints: builder => ({
    getData: builder.query({
      query: () => ({
        url: 'products',
        method: 'get',
      }),
    }),
    getDataById: builder.query({
      query: id => ({
        url: `products/${id}`,
        method: 'get',
      }),
    }),

    addNewPost: builder.mutation({
      query: data => ({
        url: 'products',
        method: 'POST',
        body: data,
      }),
    }),
    updatePost: builder.mutation({
      query: (id, data) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    deletePost: builder.mutation({
      query: id => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Use the correct naming convention for the generated hook
export const {
  useGetDataQuery,
  useGetDataByIdQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = apiMethods;

// // Corrected naming convention

// // Additional configuration can be added here if needed
