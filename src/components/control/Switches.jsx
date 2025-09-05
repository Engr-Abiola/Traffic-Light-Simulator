import styles from './switches.module.css';

const Switches = ({handleSwitchOnButton, switches, handleSwitchOffButton }) => { 

  return (
    <div className={styles.main}>
       <section className={styles.buttons}>
         <button className={switches ? styles.button_off : styles.button_on} onClick={switches ? handleSwitchOffButton : handleSwitchOnButton}> {switches ? 'OFF' : 'ON'} </button>
       </section>
    </div>
  )
}

export default Switches