import styles from './layout.module.css';
import LightsLayout from './lights/light-layout/LightsLayout';
import TimeDisplay from '../time-display/TimeDisplay';
import Switches from '../control/Switches';
import { useCallback, useState } from 'react';

const Layout = () => {

  const [displayTime, setDisplayTime] = useState(false); // monitors the initialTime countdown, if its finished, then the light_timer(the lights countdown time) is displayed

  const [lightStatus, setLightStatus] = useState({green:false, yellow:false, red:false});

  const [isAnimate, setIsAnimate] = useState(true); // monitors the animation of the lights, if true, then the lights are animated, else they are not animated
  
 const [getReady, setGetReady] = useState( {green : false, yellow : false, red : false} ); // monitors the about to stop and the about to go of the green light and red light respectively.
 
// I used this method in other to prevent multiple call of setLightStatus
  const handleLightToggle = useCallback ( newObject =>{
    setLightStatus(newObject);
  }, [] );
 
 //handles the update for isAnimate, avoiding multiple calls
 //this is used to animate the lights when the initialTime is counting down
  const handleAnimation = useCallback( newValue=>{
      setIsAnimate( newValue);
 }, [] ); 

  return (
    <div className={styles.mainLayout}>
        <TimeDisplay displayTime={displayTime} display={setDisplayTime} handleLightToggle={handleLightToggle} animate={handleAnimation} setGetReady={setGetReady} />

        <div className={styles.comps}>
              <LightsLayout displayTime={displayTime}  lightStatus={lightStatus} isAnimate={isAnimate} getReady={getReady} />
              <Switches display={setDisplayTime} setIsAnimate={setIsAnimate} lightStatus={handleLightToggle} /* setLightAndTimeControl={setLightAndTimeControl} lightAndTimeControl={lightAndTimeControl} *//>
        </div>

    </div>
  )
}

export default Layout;
