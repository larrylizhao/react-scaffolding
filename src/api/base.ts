import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API } from '@Api/constants';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API
  }),
  keepUnusedDataFor: 5,
  refetchOnMountOrArgChange: 5,
  endpoints: () => ({})
});
