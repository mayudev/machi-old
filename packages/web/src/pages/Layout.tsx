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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export default function Layout() {
  const [popupMode, setPopupMode] = useState<PopupMode>(PopupMode.Login);

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
        timeout={200}
        unmountOnExit={true}
        classNames="popup"
      >
        <Popup onHide={hidePopup}>
          <LoginPopup onClose={hidePopup} />
        </Popup>
      </CSSTransition>

      <Overlay>
        <Navbar onLoginPopup={showLoginPopup} />
        <Outlet />
      </Overlay>
    </>
  );
}
