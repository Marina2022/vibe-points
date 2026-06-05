import s from './ClosePopupButton.module.scss';

type ClosePopupButtonProps = {
  setOpen: (value: boolean) => void;
  className?: string;
}

const ClosePopupButton = ({setOpen, className=''}: ClosePopupButtonProps) => {

  return (
      <button className={`${s.btn} ${className}`} onClick={()=>setOpen(false)} >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5303 0.530273L8.53027 8.53027L16.5303 16.5301" stroke="#252526" strokeOpacity="0.6" strokeWidth="1.5"/>
        <path d="M0.530273 0.530273L8.53027 8.53027L0.530273 16.5301" stroke="#252526" strokeOpacity="0.6" strokeWidth="1.5"/>
      </svg>
    </button>
  );
};

export default ClosePopupButton;