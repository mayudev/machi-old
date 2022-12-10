import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Reverse } from 'types';

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
    }),
  }),
});
