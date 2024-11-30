import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApiSlice = createApi({
  reducerPath: "blogApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lumoshive-academy-media-api.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getRecentPost: builder.query({
      query: () => `games?page=1`,
    }),
    getPost: builder.query({
      query: (page) => `games/news?page=${page}`,
    }),
    getPostDetail: builder.query({
      query: (key) => `detail/${key}`,
    }),
  }),
});
export const { useGetRecentPostQuery, useGetPostQuery, useGetPostDetailQuery } = blogApiSlice;