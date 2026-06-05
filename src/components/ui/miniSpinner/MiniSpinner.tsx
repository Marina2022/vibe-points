import {ImSpinner2} from "react-icons/im";
import s from './MiniSpinner.module.scss'
import React from "react";

const MiniSpinner = ({big = false, middle = false, popup=false}: {popup?: boolean, big?: boolean, middle?: boolean }) => {

  let spinnerClass = s.svg
  if (big) spinnerClass = s.bigSvg
  if (middle) spinnerClass = s.middleSvg

  if (big) return (
    <div className={s.center}>
      <img width={80} height={80} src="/img/Load_GIF.gif" alt=""/>
    </div>
  )

  if (middle) return (
    <div className={s.center}>
      <img width={80} src="/img/Mini_load.gif" alt=""/>
    </div>
  )

  if (popup) return (
    <div className={s.center}>
      <img width={60} height={60} src="/img/Load_GIF.gif" alt=""/>
    </div>
  )


  return (
    <span><ImSpinner2 className={spinnerClass}/></span>
  );
};

export default MiniSpinner;

