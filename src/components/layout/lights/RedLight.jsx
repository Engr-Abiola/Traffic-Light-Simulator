import styles from './redlight.module.css';
//import { useContext } from 'react';
import SwitchOnButtonContext from "../../../context/InitialStateContext";

const RedLight = ( {redStatus, isAnimate} ) => {
 
  // const switchOnBtnContext =  useContext(SwitchOnButtonContext);

  return (
  
    <div className=
       { 
        `${redStatus? styles.red : styles.black} 
        ${isAnimate ? styles.animate : ''}`
       }
    >  
    </div>
  )
}

export default RedLight;

