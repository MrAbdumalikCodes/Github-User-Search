import React from 'react'
import styles from '../App/App.module.css';
import search from "../images/search.svg"

export default function InputSearch(props) {
  const {handleChange,submitHandler,users} = props
  console.log(props);
  return (
    <div className={styles.inputBox}>
    <img className={styles.ic} src={search} alt="search" />
    <input value={users} onChange={handleChange} className={styles.inp} type="text" placeholder='Search GitHub username…' />
    <button type='submit' onClick={submitHandler} className={styles.btn}>Search</button>
  </div>
  )
}
