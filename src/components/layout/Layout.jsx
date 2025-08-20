import styles from './layout.module.css';
import LightsLayout from './lights/light-layout/LightsLayout';
import TimeDisplay from '../time-display/TimeDisplay';
import Switches from '../control/Switches';
import { useCallback, useState } from 'react';

const Layout = () => {

  const [displayTime, setDisplayTime] = useState(false); // monitors the initialTime countdown, if its finished, then the light_timer(the lights countdown time) is displayed

  const [lightStatus, setLightStatus] = useState({green:false, yellow:false, red:false});

  const [isAnimate, setIsAnimate] = useState(true); // monitors the animation of the lights, if true, then the lights are animated, else they are not animated
  
//  const [lightAndTimeControl, setLightAndTimeControl] = useState(true); // controls the light_timer, if true, then the light_timer is off, else it is on

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
        <TimeDisplay displayTime={displayTime} display={setDisplayTime} handleLightToggle={handleLightToggle} animate={handleAnimation} /* lightAndTimeControl={lightAndTimeControl} */ />

        <div className={styles.comps}>
              <LightsLayout displayTime={displayTime}  lightStatus={lightStatus} isAnimate={isAnimate} />
              <Switches display={setDisplayTime} setIsAnimate={setIsAnimate} lightStatus={handleLightToggle} /* setLightAndTimeControl={setLightAndTimeControl} lightAndTimeControl={lightAndTimeControl} *//>
        </div>

    </div>
  )
}

export default Layout;
