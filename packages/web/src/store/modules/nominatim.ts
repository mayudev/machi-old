import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Reverse, IReverse, APIError, isValidReverseResponse } from 'types';

export const serviceNominatim = createApi({
  reducerPath: 'serviceNominatim',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nominatim.openstreetmap.org/',
  }),
  endpoints: build => ({
    // Reverse geocode
    reverse: build.query<Reverse, [string, string, string?]>({
      query: ([lat, lng, zoom = 10]) =>
        `reverse?lat=${lat}&lon=${lng}&zoom=${zoom}&format=json`,
      transformResponse(data: IReverse | APIError, meta, arg) {
        if (!isValidReverseResponse(data)) throw new TypeError();
        return new Reverse(data);
      },
    }),
    search: build.query<IReverse[], string>({
      query: q => `search?q=${q}&format=json`,
    }),
  }),
});
