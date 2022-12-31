import { useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../store/store';

export default function MapListener() {
  const map = useMap();
  const moveReq = useAppSelector(state => state.map);
  const [, setSearch] = useSearchParams();

  useEffect(() => {
    if (moveReq.zoom !== 0) {
      map.setView({
        lat: moveReq.lat,
        lng: moveReq.lng,
      });
    }
  }, [moveReq]);

  return (
    <Marker
      position={{
        lat: moveReq.lat,
        lng: moveReq.lng,
      }}
    />
  );
}
