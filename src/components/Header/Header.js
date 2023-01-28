import React from 'react'
import sun from '../images/sun.svg'
import styles from '../App/App.module.css';

export default function Header() {
  
  return (
    <header className={styles.header}>
    <div className={styles.title}>definder</div>
    <div className={styles.them}>Light <img src={sun} alt="sun" /></div>
    </header>
  )
}
