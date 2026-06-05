import React, {useEffect, useRef, ReactNode, MouseEvent} from "react";
import s from "./Popup.module.scss";

interface PopupProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: ReactNode;
  classname?: string;
}

const Popup: React.FC<PopupProps> = ({open, setOpen, children, classname = ""}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  const handleUnderlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div className={s.underlay} onMouseDown={handleUnderlayClick}>
      <div className={s.popupWrapper}>
        <div className={`${s.popup} ${classname}`} ref={popupRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
