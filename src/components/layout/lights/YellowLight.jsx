import styles from "./yellowlight.module.css";
//import { useContext } from 'react';
//import SwitchOnButtonContext from "../../../context/InitialStateContext";

const YellowLight = ( {yellowStatus, isAnimate, getReady} ) => {

  //const switchOnBtnContext =  useContext(SwitchOnButtonContext);

  return (
   // toggleYellow &&
    <div className=
      {
        `${isAnimate ? styles.animate : ''} 
         ${yellowStatus ? styles.yellow : styles.black}
         ${ getReady.yellow ? styles.animate : ''}
        `
      }
    >
    </div>
  )
}

export default YellowLight;
