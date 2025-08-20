import styles from './switches.module.css';
//import { useState } from 'react';

const Switches = ({display, setIsAnimate, /* lightStatus, setLightAndTimeControl, lightAndTimeControl */}) => { 

function handleSwitchOnButton() {
  if(display){
     display(true);
     setIsAnimate(false);
  }
  else
     console.log('the function is not available!');
}

/* function handleSwitchOffButton() {
  if(lightStatus){
     lightStatus({green:false, yellow:false, red:false});
     setIsAnimate(false);
     display(false);
     setLightAndTimeControl(false)
  }
  else
     console.log('the function is not available!');
} */


  return (
    <div className={styles.main}>
       <section className={styles.buttons}>
         <button className={styles.on} onClick={handleSwitchOnButton}>On</button>
         <button className={styles.off} /* onClick={handleSwitchOffButton} */>Off</button>
       </section>
    </div>
  )
}

export default Switches