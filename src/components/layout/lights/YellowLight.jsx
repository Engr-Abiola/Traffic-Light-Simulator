import styles from "./yellowlight.module.css";
//import { useContext } from 'react';
//import SwitchOnButtonContext from "../../../context/InitialStateContext";

const YellowLight = ( {yellowStatus, isAnimate} ) => {

  //const switchOnBtnContext =  useContext(SwitchOnButtonContext);

  return (
   // toggleYellow &&
    <div className=
      {
        `${isAnimate ? styles.animate : ''} 
         ${yellowStatus ? styles.yellow : styles.black}`
      }
    >
    </div>
  )
}

export default YellowLight;
