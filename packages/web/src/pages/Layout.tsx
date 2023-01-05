import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Map from '../components/map/Map';
import { PopupMode } from '../lib/popup';
import Popup from './Popup';
import '../style/transition.css';
import LoginPopup from './popups/LoginPopup';
import Place from './Place';
import Rail, { RailAction } from '../components/layout/Rail';
import SearchBar from '../components/layout/SearchBar';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  pointer-events: none;

  z-index: 1000;

  display: flex;
  flex-direction: row;
`;

const Rest = styled.div`
  margin: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 4rem auto 8rem;
  flex-grow: 1;
`;

export default function Layout() {
  const [popupMode, setPopupMode] = useState<PopupMode>(PopupMode.Hidden);

  const hidePopup = () => {
    setPopupMode(PopupMode.Hidden);
  };

  const showLoginPopup = () => {
    setPopupMode(PopupMode.Login);
  };

  const onAction = (action: RailAction) => {
    if (action === RailAction.Login) {
      showLoginPopup();
    }
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
        <Rail onAction={onAction} />
        <Outlet />
        <Rest>
          <SearchBar />
          <Place />
        </Rest>
      </Overlay>
    </>
  );
}
