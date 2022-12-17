import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Navbar from '../components/layout/Navbar';
import Map from '../components/map/Map';
import { PopupMode } from '../lib/popup';
import Popup from './Popup';
import '../style/transition.css';
import LoginPopup from './popups/LoginPopup';
import Place from './Place';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  pointer-events: none;

  z-index: 1000;

  display: flex;
  flex-direction: column;
`;

const OverlayLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 160px;
  flex-grow: 1;
  height: 90vh;
`;

export default function Layout() {
  const [popupMode, setPopupMode] = useState<PopupMode>(PopupMode.Hidden);

  const hidePopup = () => {
    setPopupMode(PopupMode.Hidden);
  };

  const showLoginPopup = () => {
    setPopupMode(PopupMode.Login);
  };

  return (
    <>
      <Map />
      <CSSTransition
        in={popupMode !== PopupMode.Hidden}
        timeout={500}
        unmountOnExit={true}
        classNames="popup"
      >
        <Popup onHide={hidePopup}>
          <LoginPopup onClose={hidePopup} />
        </Popup>
      </CSSTransition>

      <Overlay>
        <Navbar onLoginPopup={showLoginPopup} />
        <OverlayLayout>
          <Place />
          <Outlet />
        </OverlayLayout>
      </Overlay>
    </>
  );
}
