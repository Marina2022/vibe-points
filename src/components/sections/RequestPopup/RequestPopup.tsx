import React, {Dispatch, SetStateAction, useEffect} from 'react';

import s from "./RequestPopup.module.scss";

import Popup from "@/components/ui/Popup/Popup";
import RequestPopupContent from './RequestPopupContent/RequestPopupContent';
import {showErrorToast} from "@/components/ui/ToastCustom/ToastCustom";


type Props = {
  popupOpen: boolean;
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
}

const RequestPopup = ({popupOpen, setPopupOpen}: Props) => {

  // временно отключила кнопку
  useEffect(() => {
    if (popupOpen) {
      showErrorToast("Заявки принимаются с 1 июля")
      setPopupOpen(false)
    }

  }, [popupOpen])

  return (
    <Popup open={popupOpen} setOpen={setPopupOpen} classname={s.popup}>
      <button onClick={() => setPopupOpen(false)} className={s.closeBtn}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M15.0364 1.5364C15.3879 1.18492 15.3879 0.615076 15.0364 0.263604C14.6849 -0.087868 14.1151 -0.087868 13.7636 0.263604L7.65 6.37721L1.5364 0.263604C1.18492 -0.087868 0.615076 -0.087868 0.263604 0.263604C-0.087868 0.615076 -0.087868 1.18492 0.263604 1.5364L6.37721 7.65L0.263604 13.7636C-0.087868 14.1151 -0.087868 14.6849 0.263604 15.0364C0.615076 15.3879 1.18492 15.3879 1.5364 15.0364L7.65 8.92279L13.7636 15.0364C14.1151 15.3879 14.6849 15.3879 15.0364 15.0364C15.3879 14.6849 15.3879 14.1151 15.0364 13.7636L8.92279 7.65L15.0364 1.5364Z"
                fill="#9B9B9B"/>
        </svg>
      </button>
      <RequestPopupContent setPopupOpen={setPopupOpen}/>
    </Popup>
  );
};

export default RequestPopup;