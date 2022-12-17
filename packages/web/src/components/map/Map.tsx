import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvent,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { LatLng } from 'leaflet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MapListener from './MapListener';

const OSM_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIB = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

const Container = styled.div`
  .leaflet-container {
    width: 100%;
    height: 100vh;
    filter: saturate(50%);
  }
`;

function ClickHandler() {
  const [current, setCurrent] = useState<LatLng | null>(null);
  const [search, setSearch] = useSearchParams();
  const map = useMap();

  useEffect(() => {
    if (!search.has('lat')) {
      setCurrent(null);
    }
  }, [search]);

  useMapEvent('click', e => {
    setCurrent(e.latlng);
    setSearch({
      lat: e.latlng.lat.toFixed(7).toString(),
      lng: e.latlng.lng.toFixed(7).toString(),
      zoom: map.getZoom().toString(),
    });
  });

  return current === null ? null : <Marker position={current} />;
}

export default function Map() {
  return (
    <Container>
      <MapContainer center={[41.37, 2.2]} zoom={10} zoomControl={false}>
        <TileLayer attribution={ATTRIB} url={OSM_URL}></TileLayer>
        <ClickHandler />
        <MapListener />
      </MapContainer>
    </Container>
  );
}
