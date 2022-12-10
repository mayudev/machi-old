import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { serviceNominatim } from './modules/nominatim';

export const store = configureStore({
  reducer: {
    [serviceNominatim.reducerPath]: serviceNominatim.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(serviceNominatim.middleware),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>;
export const useAppSelector: TypedUseSelectorHook<typeof store.getState> =
  useSelector;
