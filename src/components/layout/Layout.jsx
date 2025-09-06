import styles from './layout.module.css';
import LightsLayout from './lights/light-layout/LightsLayout';
import TimeDisplay from '../time-display/TimeDisplay';
import Switches from '../control/Switches';
import { useCallback, useState, useEffect } from 'react';

const Layout = () => {

  const [displayTime, setDisplayTime] = useState(false); // monitors the initialTime countdown, if its finished, then the light_timer(the lights countdown time) is displayed

  const [lightStatus, setLightStatus] = useState({green:false, yellow:false, red:false});

  const [isAnimate, setIsAnimate] = useState(true); // monitors the animation of the lights, if true, then the lights are animated, else they are not animated
  
 const [getReady, setGetReady] = useState( {green : false, yellow : false, red : false} ); // monitors the about to stop and the about to go of the green light and red light respectively.

  const [initialTime, setInitialTime] = useState( {init_time : 15} );
  const [light_timer, setLight_timer] = useState( {time : 36} );

  const [switches, setSwitches] = useState(false);

  //resets the states when the switches is turned off
  //turns off the lights, stops the animation and resets the initialTime countdown at the initial page load
  useEffect(() => {
    if( !switches ){
       setLightStatus( {green:false, yellow:false, red:false} );
       setIsAnimate(false);
       setInitialTime( {init_time : ''} );
    }
  }, [switches]);

  //At the click of the ON button, set switches to true
  function handleSwitchOnButton() {   
      setSwitches(true);
      setIsAnimate(true);
      setInitialTime( {init_time : 15} );
  }     

   //At the click of the OFF button, set switches to false
  function handleSwitchOffButton() {   
      setSwitches(false);
      setIsAnimate(false);
      setLight_timer( {time : 36} );
      setDisplayTime( false);
  }        

 
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
        <TimeDisplay displayTime={displayTime} display={setDisplayTime} handleLightToggle={handleLightToggle} animate={handleAnimation} setGetReady={setGetReady} initialTime={initialTime} setInitialTime={setInitialTime} light_timer={light_timer} setLight_timer={setLight_timer} />

        <div className={styles.comps}>
              <LightsLayout displayTime={displayTime}  lightStatus={lightStatus} isAnimate={isAnimate} getReady={getReady} />
              <Switches display={setDisplayTime} setIsAnimate={setIsAnimate} handleSwitchOnButton={handleSwitchOnButton} switches={switches} handleSwitchOffButton={handleSwitchOffButton}/>
        </div>

    </div>
  )
}

export default Layout;
