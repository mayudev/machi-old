import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MapState {
  lat: string;
  lng: string;
  zoom: number;
}

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    lat: '0',
    lng: '0',
    zoom: 0,
  } as MapState,
  reducers: {
    moveTo(state, action: PayloadAction<MapState>) {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
      state.zoom = action.payload.zoom;
    },
  },
});

export const { moveTo } = mapSlice.actions;

export default mapSlice.reducer;
