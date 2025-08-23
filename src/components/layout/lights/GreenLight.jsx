import styles from './greenlight.module.css';
//import { useContext } from 'react';
//import SwitchOnButtonContext from '../../../context/InitialStateContext';

const GreenLight = ( {greenStatus, isAnimate, getReady} ) => {


//  const switchOnBtnContext =  useContext(SwitchOnButtonContext);

  return (
      <div className=
      {
        `
        ${ getReady.green ? styles.animate : ''}
        ${ isAnimate ? styles.animate : ''} 
        ${greenStatus ? styles.green : styles.black}
      `
      }
    >
    </div>
      
  )
}

export default GreenLight;
