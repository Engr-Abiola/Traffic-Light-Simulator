import styles from './layout.module.css';
import GreenLight from '../GreenLight';
import RedLight from '../RedLight';
import YellowLight from '../YellowLight';
//import { useContext } from 'react';
//import SwitchOnButtonContext from '../../../../context/InitialStateContext';

const LightsLayout = (  { lightStatus, isAnimate, getReady}) => {
 
  return (
    <div className={styles.lights}>
     {/*  <SwitchOnButtonContext.Provider value={switchOnButtonState}> */}
            <GreenLight  greenStatus={lightStatus.green} isAnimate={isAnimate} getReady={getReady} />
            <YellowLight  yellowStatus={lightStatus.yellow} isAnimate={isAnimate} getReady={getReady}/>
            <RedLight  redStatus={lightStatus.red} isAnimate={isAnimate} getReady={getReady}/>
   {/*    </SwitchOnButtonContext.Provider> */}
    </div>
  )
}

export default LightsLayout;
