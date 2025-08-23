import styles from './time-display.module.css';
import { useState, useEffect} from 'react';

const TimeDisplay = ( {displayTime, display, handleLightToggle, animate, setGetReady} ) => {
   const [initialTime, setInitialTime] = useState( {init_time : 15} );
   const [light_timer, setLight_timer] = useState( {time : 36} );

   const{init_time} = initialTime; //shadow copy
   const{time} = light_timer;

//displays the initial time immediately the app loads
useEffect( ()=>{
    const intervalId = setInterval( ()=>{
        setInitialTime( t =>{
            let timing = t.init_time ;
             if(timing === 1){
                   return {init_time:1};
             }
             
             return {init_time : timing -1};
        } )
    },1000 );
   return ()=> clearInterval(intervalId); // clean-up the setInterval
}, [handleLightToggle] );

//display the lights at the initialTime(15) countdown 
useEffect( ()=>{
     handleLightToggle( {green:true, yellow:true, red:true} );
}, [handleLightToggle] ) ;

//Animates the lights(ONLY) when the initialTime(the initial countdown time) is > 1
useEffect( ()=>{
  if(initialTime.init_time === 1)
      animate(false);
}, [animate, initialTime] );

//Animates the lights(ONLY) when the light_timer(the lights countdown time) is <= 14 and > 7 or <= 3 and != 0
useEffect( ()=>{
   if(time <=14 && time > 7){
       setGetReady( {green : true, yellow : true, red : false} );
   }  
    else if(time <=3 && time !== 0){
        setGetReady( {green : false, yellow : true, red : true} );
    }  
    else
       setGetReady( {green : false, yellow : false, red : false} );
}, [setGetReady, time] );

//checks if init_time is 1, if it is then set displayTime to true, which will display the light_timer countdown and hide the init_time countdown
//uses the state of checkTime to display either init_time or time
useEffect( ()=>{
    if(init_time === 1)
      display( true);
}, [init_time, display]);

// if displayTime is true, then, the initial_time had finished counting. Display the light_timer(the light countdown time) and start countdown
useEffect( ()=>{
  if(displayTime){ 
      const stopIntava = setInterval( ()=>{
              //handleLightToggle({green:true, yellow:false, red:false});
              let ntime = time - 1;
              setLight_timer( {time:ntime} );
         if(ntime >= 15){
            // display only green light
            handleLightToggle({green:true, yellow:false, red:false});
         }
           
       else if(ntime <=14 && ntime > 7){
            // display green and yellow lights
            handleLightToggle({green:true, yellow:true, red:false});
       }
       else if(ntime <= 7 && ntime > 3){
                  // display only red light
                handleLightToggle({green:false, yellow:false, red:true});
            } 
     
        else if(ntime <=3 && ntime !== 0){
                  // display red and yellow lights
              handleLightToggle({green:false, yellow:true, red:true});
            }
           
           else{ 
                 setLight_timer({time:36});
           }

      }, 1000 );
   return  ()=> clearInterval(stopIntava);
  }
},[displayTime, time, handleLightToggle] );

  return (
    <div className={styles.timer}>
       <h1 className={styles.time}>  {displayTime ? time : init_time} </h1>
    </div>
  )
}

export default TimeDisplay;
