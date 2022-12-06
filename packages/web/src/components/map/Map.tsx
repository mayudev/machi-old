import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const OSM_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIB = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

const Container = styled.div`
  .leaflet-container {
    width: 100%;
    height: 100vh;
    filter: saturate(50%);
  }
`;
export default function Map() {
  return (
    <Container>
      <MapContainer center={[41.37, 2.2]} zoom={10} zoomControl={false}>
        <TileLayer attribution={ATTRIB} url={OSM_URL}></TileLayer>
      </MapContainer>
    </Container>
  );
}
