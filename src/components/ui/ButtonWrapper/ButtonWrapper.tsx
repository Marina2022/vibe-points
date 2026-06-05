import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import RequestPopup from "@/components/sections/RequestPopup/RequestPopup";

type ButtonWrapperProps = {
  children: (args: {
    setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
};

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (popupOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [popupOpen, mounted]);

  return (
    <div style={{
      display: "inline-block",
      width: 260
    }}>
      {children({ setPopupOpen })}

      {mounted &&
        createPortal(
          <RequestPopup
            setPopupOpen={setPopupOpen}
            popupOpen={popupOpen}
          />,
          document.body
        )}
    </div>
  );
};

export default ButtonWrapper;