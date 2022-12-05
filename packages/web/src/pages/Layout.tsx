import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/layout/Navbar';
import Map from '../components/map/Map';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export default function Layout() {
  return (
    <>
      <Map />
      <Overlay>
        <Navbar />
        <Outlet />
      </Overlay>
    </>
  );
}
