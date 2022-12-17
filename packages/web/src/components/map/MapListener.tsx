import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useAppSelector } from '../../store/store';

export default function MapListener() {
  const map = useMap();
  const moveReq = useAppSelector(state => state.map);

  useEffect(() => {
    if (moveReq.zoom !== 0) {
      map.setView({
        lat: Number(moveReq.lat),
        lng: Number(moveReq.lng),
        zoom: 17,
      });
    }
  }, [moveReq]);

  return null;
}
